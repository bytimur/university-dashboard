import { TFuncReturn } from "i18next";
import {
  Control,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export type SelectProps = {
  label?: string;
  placeholder: string;
  defaultValue?: SelectData | SelectData[];
  data: SelectData[];
  name: string;
  control: Control<FieldValues, any>;
  error?: string | TFuncReturn;
  options?: SelectOptions;
};

export type SelectOptions = {
  isMulti?: boolean;
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  isDisabled?: boolean;
};

export type SelectStyleProps = {};

export type SelectData = {
  value: number;
  label: string;
  // disabled: boolean;
};
