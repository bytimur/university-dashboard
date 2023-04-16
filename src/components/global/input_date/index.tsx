import { FC } from "react";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import { InputDate } from "./input-date";
import Container from "./style";

const InputDate: FC<InputDate> = (props) => {
  const { placeholder, name, register, error } = props;
  return (
    <Container>
      <div className="date-input-container">
        <input
          placeholder={placeholder}
          {...register}
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          id="date"
        />
        <div className="input-icon-wrap">
          <IconProvider
            icon="CalendarIcon"
            color="second_text"
            width={20}
            height={20}
          />
        </div>
      </div>
      {error ? (
        <TextProvider
          className="eror-message"
          options={{
            textType: {
              regular: "regular12|14",
            },
            color: "solid_red10",
          }}
        >
          <IconProvider icon="AttentionCircle" color="solid_red10" />
          {error}
        </TextProvider>
      ) : null}
    </Container>
  );
};

export default InputDate;
