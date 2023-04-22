import * as yup from "yup";
import { SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Container from "./style";
import { useRouter } from "next/router";
import MainInput from "../../../../global/main_input";
import { authAPI } from "@/src/redux/services/auth_service";
import { useTranslation } from "react-i18next";
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
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const ForgetPasswordAuth = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<YupValidationType>({
    resolver: yupResolver(yupValidation),
    mode: "onBlur",
  });
  const [forgetPassword] = authAPI.useForgetPasswordMutation();

  const onSubmit = (data: YupValidationType) => {
    const { phoneNumber } = data;
    forgetPassword({ username: phoneNumber })
      .unwrap()
      .then((res) => {
        if (res.status != "success") return;
        router.push("/auth");
      });
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
          {t("auth_forget_password")}
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
      </div>
      <div className="button-wrap">
        <MainButton
          onClick={() => router.replace("/auth")}
          type="submit"
          options={{
            type: "outline",
            width: "100%",
          }}
          title={t("button_back")}
        />
        <MainButton
          onClick={handleSubmit(onSubmit)}
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

export default ForgetPasswordAuth;
