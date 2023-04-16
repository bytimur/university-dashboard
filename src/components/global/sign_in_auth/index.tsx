import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { useForm } from "react-hook-form";
import { authAPI } from "@/src/redux/services/auth_service";
import { getToken, saveToken } from "@/src/utils/tokenFunctions";
import Link from "next/link";
import MainButton from "../buttons/main_button";
import Container from "./style";
import Input from "../../../../input";
import ChangerButton from "../changer_button";
import TextProvider from "../providers/text_provider";
import { changerButtonData } from "@/src/resources/demo-data";
import usePasswordToggle from "@/src/hooks/usePasswordToggle";
import { t } from "i18next";
import MainInput from "../main_input";

const yupValidation = yup.object({
  phoneNumber: SCHEMA_INPUT_TEXT,
  password: SCHEMA_INPUT_TEXT,
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const SignIn = () => {
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
        console.log(res);
        const a = saveToken(res);
        console.log(a);
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
          Добро пожаловать
        </TextProvider>
        <TextProvider
          options={{
            textType: {
              regular: "regular12|14",
            },
            color: "second_text",
          }}
        >
          Предоставьте свои данные для входа в соответствии с запросом
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
        <Link href="/auth/change_password" className="forget-password">
          Забыли пароль?
        </Link>
      </div>
      <MainButton
        onClick={handleSubmit(onSubmit)}
        type="submit"
        options={{
          type: "fill",
          width: "100%",
        }}
        title="Войти"
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
          Нет аккаунта?
        </TextProvider>
        <TextProvider
          options={{
            textType: {
              regular: "regular14|16",
            },
            color: "static_primary_solid",
          }}
        >
          <Link href="/auth/registration">Зарегистрируйтесь</Link>
        </TextProvider>
      </div>
    </Container>
  );
};

export default SignIn;
