import * as yup from "yup";

export const SELECT_SCHEMA = yup.object().required("required_field");

export const SCHEMA_INPUT_TEXT = yup.string().required("required_field");

export const DATEPICKER_SCHEMA = yup.string().required("required_field");

export const SCHEMA_INPUT_NUMBER = yup
  .number()
  .transform((value) => (isNaN(value) ? undefined : value))
  .required("required_field");

export const SCHEMA_INPUT_EMAIL = yup
  .string()
  .email("required_field")
  .required("required_field");

export const SCHEMA_MULTILANG_TITLE_PASSWORD_EMAIL = yup.object({
  text: SCHEMA_INPUT_TEXT,
  password: SCHEMA_INPUT_NUMBER,
  email: SCHEMA_INPUT_EMAIL,
});
