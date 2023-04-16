import * as yup from "yup";

export const SELECT_SCHEMA = yup.object().required("required_field");

export const SCHEMA_INPUT_TEXT = yup.string().required("field_required");

export const DATEPICKER_SCHEMA = yup.string().required("field_required");

export const SCHEMA_INPUT_NUMBER = yup
  .number()
  .transform((value) => (isNaN(value) ? undefined : value))
  .required("field required");

export const SCHEMA_INPUT_EMAIL = yup
  .string()
  .email("Email is invalid")
  .required("Email is required");

export const SCHEMA_MULTILANG_TITLE_PASSWORD_EMAIL = yup.object({
  text: SCHEMA_INPUT_TEXT,
  password: SCHEMA_INPUT_NUMBER,
  email: SCHEMA_INPUT_EMAIL,
});
