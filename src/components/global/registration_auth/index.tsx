import * as yup from "yup";
import { SCHEMA_INPUT_NUMBER, SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MainButton from "../buttons/main_button";
import Container from "./style";
import TextProvider from "../providers/text_provider";
import { useRouter } from "next/router";
import MainInput from "../main_input";
import { authAPI } from "@/src/redux/services/auth_service";
import { getToken, saveToken } from "@/src/utils/tokenFunctions";
import { useEffect } from "react";

const yupValidation = yup.object({
  phoneNumber: SCHEMA_INPUT_TEXT,
  pinfl: SCHEMA_INPUT_TEXT,
  smsCode: SCHEMA_INPUT_NUMBER,
  createPassword: SCHEMA_INPUT_NUMBER,
  repeatPassword: SCHEMA_INPUT_NUMBER.oneOf(
    [yup.ref("createPassword")],
    "Password does not match"
  ),
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const RegistrationAuth = () => {
  const [signup, { data, error }] = authAPI.useSignupMutation();

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
    signup({ mobile: phoneNumber, pinfl, school_id: 0 })
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data: YupValidationType) => {
    const { phoneNumber, pinfl, smsCode, createPassword, repeatPassword } =
      data;
    console.log(data);
    // signup({
    //   mobile: phoneNumber,
    //   pinfl,
    //   school_id: 0,
    // })
    //   .unwrap()
    //   .then((res) => {
    //     console.log(res);
    //     // const a = saveToken(res);
    //   })
    //   .catch((error) => console.warn(error));
  };

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div className="titler">
        <TextProvider
          options={{
            textType: {
              bold: "bold24|32",
            },
          }}
        >
          Зарегистрироваться
        </TextProvider>
      </div>
      <div className="input-wrap">
        <MainInput
          placeholder="Введите номер телефона"
          name="phoneNumber"
          register={register("phoneNumber")}
          error={
            errors?.phoneNumber?.message &&
            (errors.phoneNumber.message as string)
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
          error={errors?.pinfl?.message && (errors.pinfl.message as string)}
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
              errors?.smsCode?.message && (errors.smsCode.message as string)
            }
            options={{
              disabled: false,
              setFocus: () => setFocus("smsCode"),
            }}
          />
          <MainButton
            onClick={onSendClick}
            title="Отправить код"
            options={{
              type: "outline",
            }}
          />
        </div>
        <MainInput
          placeholder="Созадайте пароль"
          name="createPassword"
          register={register("createPassword")}
          error={
            errors?.createPassword?.message &&
            (errors.createPassword.message as string)
          }
          options={{
            disabled: false,
            setFocus: () => setFocus("createPassword"),
          }}
        />
        <MainInput
          placeholder="Повторите пароль"
          name="repeatPassword"
          register={register("repeatPassword")}
          error={
            errors?.repeatPassword?.message &&
            (errors.repeatPassword.message as string)
          }
          options={{
            disabled: false,
            setFocus: () => setFocus("repeatPassword"),
          }}
        />
      </div>
      <div className="button-wrap">
        <MainButton
          onClick={() => router.push("/auth")}
          type="submit"
          options={{
            type: "outline",
            width: "100%",
          }}
          title="Назад"
        />
        <MainButton
          onClick={handleSubmit(onSubmit)}
          type="submit"
          options={{
            type: "fill",
            width: "100%",
          }}
          title="Cохранить"
        />
      </div>
    </Container>
  );
};

export default RegistrationAuth;
