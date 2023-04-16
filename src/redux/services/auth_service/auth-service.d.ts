export type SigninRequest = {
  login_as: LoginAsType;
  username: string;
  password: string;
};

export type SigninResponse = {
  login_as: "ADMIN";
  access: string;
  refresh: string;
};

export type SignupRequest = {
  mobile: string;
  pinfl: string;
  school_id: 0;
};

export type SignupResponse = {
  mobile: string;
  pinfl: string;
  school_id: 0;
};

export type RefreshTokenRequest = {
  refresh: string;
};

export type RefreshTokenResponse = {
  access: string;
};

export type ChangePasswordRequest = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthday: string;
  pinfl: string;
  passport_number: string;
  course_of_study: 0;
  nationality: 0;
  mobile: string;
  email: string;
  street1: string;
  street2: string;
  gender: string;
  school_document_number: string;
  area: 0;
  diploma: 0;
  faculty: 0;
  governorate: 0;
  identity_1: 0;
  identity_2: 0;
  photo_3_4: 0;
};

export type ChangePasswordResponses = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthday: string;
  pinfl: string;
  passport_number: string;
  course_of_study: 0;
  nationality: 0;
  mobile: string;
  email: string;
  street1: string;
  street2: string;
  gender: string;
  school_type: string;
  school_document_number: string;
  for_degree: string;
  form_of_education: string;
  language: string;
  status: string;
  area: 0;
  diploma: 0;
  faculty: 0;
  governorate: 0;
  identity_1: 0;
  identity_2: 0;
  photo_3_4: 0;
  created_date: string;
};

export type LoginAsType = "ADMIN" | "ENROLLEE";
