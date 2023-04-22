import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { useForm } from "react-hook-form";
import { authAPI } from "@/src/redux/services/auth_service";
import { getToken, saveToken } from "@/src/utils/tokenFunctions";

import Container from "./style";
import Input from "../../../../../../input";
import ChangerButton from "../../../../global/changer_button";
import { changerButtonData } from "@/src/resources/demo-data";
import usePasswordToggle from "@/src/hooks/usePasswordToggle";
import { t } from "i18next";
import MainInput from "../../../../global/main_input";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
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
const Link = dynamic(() => import("next/link"), {
  ssr: false,
});

const yupValidation = yup.object({
  phoneNumber: SCHEMA_INPUT_TEXT,
  password: SCHEMA_INPUT_TEXT,
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const WelcomeAuth = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [signin, { data, isSuccess, isError, error }] =
    authAPI.useSigninMutation();

  const onSegmentClick = (index: number) => {
    index != activeIndex && setActiveIndex(index);
  };

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<YupValidationType>({
    resolver: yupResolver(yupValidation),
  });

  const onSubmit = (data: YupValidationType) => {
    const { phoneNumber, password } = data;
    const login_as = activeIndex == 0 ? "ENROLLEE" : "ADMIN";
    signin({ login_as, username: phoneNumber, password })
      .unwrap()
      .then((res) => {
        if (!res.access) return;
        const a = saveToken(res);
        // TODO: change route base on role
        router.replace("/student");
      })
      .catch((error) => console.warn(error));
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
          {t("auth_welcome_title")}
        </TextProvider>
        <TextProvider
          className="titler-descript"
          options={{
            textType: {
              regular: "regular12|14",
            },
            color: "second_text",
          }}
        >
          {t("auth_welcome_description")}
        </TextProvider>
      </div>
      <div className="tabbar-changer-wrap">
        {changerButtonData.map((item) => (
          <ChangerButton
            {...item}
            key={item.id}
            activeIndex={activeIndex}
            onClick={() => onSegmentClick(item.id)}
          />
        ))}
      </div>
      <div className="input-wrap">
        <MainInput
          placeholder="Введите номер"
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
          placeholder="Введите пароль"
          name="password"
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
        <Link
          href="/auth/forget_password"
          className="forget-password"
          replace={true}
        >
          {t("auth_forget_password_title")}
        </Link>
      </div>
      <MainButton
        onClick={handleSubmit(onSubmit)}
        type="submit"
        options={{
          type: "fill",
          width: "100%",
        }}
        title={t("come_in")}
      />
      <div className="registration-text">
        <TextProvider
          options={{
            textType: {
              regular: "regular14|16",
            },
            color: "second_text",
          }}
        >
          {t("auth_without_acc_title")}
        </TextProvider>
        <TextProvider
          options={{
            textType: {
              regular: "regular14|16",
            },
            color: "static_primary_solid",
          }}
        >
          <Link href="/auth/registration" replace={true}>
            {t("auth_registration_title")}
          </Link>
        </TextProvider>
      </div>
    </Container>
  );
};

export default WelcomeAuth;
