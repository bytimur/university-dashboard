export type SigninRequest = {
  login_as: LoginAsType;
  username: string;
  password: string;
};

export type SigninResponse = {
  login_as: LoginAsType;
  access: string;
  refresh: string;
};

export type SignupRequest = {
  mobile: string;
  pinfl: string;
};

export type SignupResponse = {
  mobile: string;
  pinfl: string;
};

export type RefreshTokenRequest = {
  refresh: string;
};

export type RefreshTokenResponse = {
  access: string;
};

export type ChangePasswordRequest = {
  token: string;
  body: {
    old_password: string;
    password: string;
    confirmed_password: string;
  };
};

export type ChangePasswordResponse = {
  status: "ok";
};

export type ForgetPasswordRequest = {
  username: string;
};
export type ForgetPasswordResponse = {
  message: string;
  status: string;
};

export type LoginAsType = "ADMIN" | "ENROLLEE";
