import { TFuncReturn } from "i18next";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  label?: string;
  placeholder?: string | TFuncReturn;
  name: string;
  register: UseFormRegisterReturn<any>;
  error?: string | TFuncReturn;
  options?: InputOptions;
};

export type InputOptions = {
  type?: InputType;
  adderText?: string;
  setFocus?: () => void;
  disabled?: boolean;
};

export type InputOptionsReturn = {
  type: InputType | undefined;
  adderText: string | undefined;
  setFocus: () => void | undefined;
  disabled: boolean | undefined;
};

export type InputStyleProps = {};

type InputType = "text" | "number" | "email" | "password" | "tel" | "date";
