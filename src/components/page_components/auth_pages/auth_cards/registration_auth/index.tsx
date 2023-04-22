import * as yup from "yup";
import { SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Container from "./style";
import { useRouter } from "next/router";
import MainInput from "../../../../global/main_input";
import { authAPI } from "@/src/redux/services/auth_service";
import { useTranslation } from "react-i18next";
import { saveToken } from "@/src/utils/tokenFunctions";
import dynamic from "next/dynamic";

const MainButton = dynamic(
  () => import("../../../../global/buttons/main_button"),
  {
    ssr: false,
  }
);
const TextProvider = dynamic(
  () => import("../../../../global/providers/text_provider"),
  {
    ssr: false,
  }
);

const yupValidation = yup.object({
  phoneNumber: SCHEMA_INPUT_TEXT,
  pinfl: SCHEMA_INPUT_TEXT,
  smsCode: SCHEMA_INPUT_TEXT.min(8, "Min 8 characters"),
  password: SCHEMA_INPUT_TEXT,
  repeatPassword: SCHEMA_INPUT_TEXT.oneOf(
    [yup.ref("password")],
    "Password does not match"
  ),
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const AuthRegistrationPage = () => {
  const { t } = useTranslation();
  const [signup] = authAPI.useSignupMutation();
  const [signin] = authAPI.useSigninMutation();
  const [changePass] = authAPI.useChangePasswordMutation();

  const router = useRouter();

  const {
    watch,
    register,
    handleSubmit,
    setFocus,
    getFieldState,
    formState: { errors },
  } = useForm<YupValidationType>({
    resolver: yupResolver(yupValidation),
    mode: "onBlur",
  });

  const phoneNumber = watch("phoneNumber");
  const pinfl = watch("pinfl");

  const onSendClick = () => {
    const isPhoneNumberValid = getFieldState("phoneNumber");
    const isPinflValid = getFieldState("pinfl");
    if (
      isPhoneNumberValid.invalid ||
      isPinflValid.invalid ||
      !phoneNumber ||
      !pinfl
    )
      return;
    console.log("PN:", phoneNumber, "PNFL:", pinfl);
    signup({ mobile: phoneNumber, pinfl })
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data: YupValidationType) => {
    const { phoneNumber, pinfl, smsCode, password, repeatPassword } = data;
    console.log(data);
    signin({
      username: phoneNumber,
      password: smsCode,
      login_as: "ENROLLEE",
    })
      .unwrap()
      .then((res) => {
        const token = res.access;
        saveToken(res);
        const body = {
          old_password: smsCode,
          password: password,
          confirmed_password: repeatPassword,
        };
        changePass({ token, body })
          .unwrap()
          .then((ok) => {
            if (ok.status !== "ok") return;
            router.replace("/student");
          });
      });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div className="titler">
        <TextProvider
          options={{
            textType: {
              bold: "bold24|32",
            },
          }}
        >
          {t("auth_registration_title")}
        </TextProvider>
      </div>
      <div className="input-wrap">
        <MainInput
          placeholder="Введите номер телефона"
          name="phoneNumber"
          register={register("phoneNumber")}
          error={
            errors?.phoneNumber?.message &&
            t(errors.phoneNumber.message as string)
          }
          options={{
            disabled: false,
            setFocus: () => setFocus("phoneNumber"),
          }}
        />
        <MainInput
          placeholder="ПНФЛ"
          name="pinfl"
          register={register("pinfl")}
          error={errors?.pinfl?.message && t(errors.pinfl.message as string)}
          options={{
            disabled: false,
            setFocus: () => setFocus("pinfl"),
          }}
        />
        <div className="input-code-wrap">
          <MainInput
            placeholder="СМС код"
            name="smsCode"
            register={register("smsCode")}
            error={
              errors?.smsCode?.message && t(errors.smsCode.message as string)
            }
            options={{
              disabled: false,
              setFocus: () => setFocus("smsCode"),
            }}
          />
          <MainButton
            onClick={onSendClick}
            title={t("button_send")}
            type="button"
            options={{
              type: "outline",
            }}
          />
        </div>
        <MainInput
          placeholder="Созадайте пароль"
          name="createPassword"
          register={register("password")}
          error={
            errors?.password?.message && t(errors.password.message as string)
          }
          options={{
            type: "password",
            disabled: false,
            setFocus: () => setFocus("password"),
          }}
        />
        <MainInput
          placeholder="Повторите пароль"
          name="repeatPassword"
          register={register("repeatPassword")}
          error={
            errors?.repeatPassword?.message &&
            t(errors.repeatPassword.message as string)
          }
          options={{
            type: "password",
            disabled: false,
            setFocus: () => setFocus("repeatPassword"),
          }}
        />
      </div>
      <div className="button-wrap">
        <MainButton
          onClick={() => router.replace("/auth")}
          type="button"
          options={{
            type: "outline",
            width: "100%",
          }}
          title={t("button_back")}
        />
        <MainButton
          onClick={() => console.log("first")}
          type="submit"
          options={{
            type: "fill",
            width: "100%",
          }}
          title={t("button_save")}
        />
      </div>
    </Container>
  );
};

export default AuthRegistrationPage;
