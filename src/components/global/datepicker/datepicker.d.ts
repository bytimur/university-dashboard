import { FieldValues } from "react-hook-form";

export type DatepickerProps = {
  placeholder?: string;
  name: string;
  control: Control<FieldValues, any>;
  error?: string;
};
