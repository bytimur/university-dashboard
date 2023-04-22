import React, { useState } from "react";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";

import { InputProps } from "./input";
import { useInputOptions } from "./input-options";
import Container from "./style";

const MainInput = (props: InputProps) => {
  const {
    label,
    name,
    register,
    placeholder,
    error,
    options: propsOptions = {},
  } = props;
  const options = useInputOptions(propsOptions);
  const [isAtive, setActive] = useState(false);
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  const onPasswordEyeClick = () => {
    if (isAtive) {
      setActive(false);
      setPasswordType("password");
    } else {
      setActive(true);
      setPasswordType("text");
    }
  };

  return (
    <Container>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <div className="input_container">
        <input
          {...register}
          placeholder={placeholder}
          type={options.type !== "password" ? options.type : passwordType}
          disabled={options.disabled}
        />
        {options.type === "password" ? (
          <button
            type="button"
            onClick={onPasswordEyeClick}
            className="password_eye"
          >
            <IconProvider
              icon={!isAtive ? "EyeIcon" : "EyeSlashIcon"}
              color="second_text"
            />
          </button>
        ) : null}
        {options.adderText ? (
          <span className="adder" onClick={options.setFocus}>
            {options.adderText}
          </span>
        ) : null}
      </div>
      {error ? (
        <div className="error_message">
          <IconProvider icon="AttentionCircle" />
          <TextProvider
            options={{
              textType: {
                regular: "regular12|14",
              },
              color: "solid_red10",
            }}
          >
            {error}
          </TextProvider>
        </div>
      ) : null}
    </Container>
  );
};

export default MainInput;
