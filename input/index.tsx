import { useState } from "react";
import IconProvider from "../src/components/global/providers/icon_provider";
import TextProvider from "../src/components/global/providers/text_provider";
import { InputField, InputLabel, InputWrapper } from "./style";
import { InputProps } from "./input";

const Input: React.FC<InputProps> = ({
  placeholder,
  register,
  name,
  error,
  type,
  ...rest
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value);
  };

  return (
    <InputWrapper>
      <InputField
        onChange={handleInputChange}
        isFilled={isFilled}
        type={type || "text"}
        required
        {...register}
        {...rest}
      />
      <InputLabel htmlFor={name}>{placeholder}</InputLabel>
      {error ? (
        <div className="error">
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
    </InputWrapper>
  );
};

export default Input;
