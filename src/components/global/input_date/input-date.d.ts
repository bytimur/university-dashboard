import { TFuncReturn } from "i18next";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputDate = {
  placeholder?: string;
  name: string;
  register: UseFormRegisterReturn<any>;
  error?: string | TFuncReturn;
};
