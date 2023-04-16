import { FC, useRef } from "react";
import { Container } from "./style";
import ReactDatePicker from "react-datepicker";
import { DatepickerProps } from "./datepicker";
import { Controller } from "react-hook-form";

//TODO:complete this
const DatePicker: FC<DatepickerProps> = (props) => {
  const { name, control, placeholder } = props;
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, ...fieldProps } }) => {
          return (
            <ReactDatePicker
              {...fieldProps}
              className="input"
              dateFormat="dd.MM.yyyy"
              placeholderText={placeholder}
              selected={value}
              showMonthDropdown
              showYearDropdown
              adjustDateOnChange
            />
          );
        }}
      />
    </Container>
  );
};

export default DatePicker;
