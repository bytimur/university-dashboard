import {
  ForgetPasswordRequest,
  ForgetPasswordResponse,
  SignupRequest,
} from "./auth-service.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_ENDPOINTS, METHOD_TYPE } from "../../api_endpoints";
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  SigninRequest,
  SigninResponse,
  SignupResponse,
} from "./auth-service";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["AUTH"],
  endpoints: (build) => ({
    signin: build.mutation<SigninResponse, SigninRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.SIGN_IN}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
    signup: build.mutation<SignupResponse, SignupRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.SIGN_UP}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
    refreshToken: build.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.REFRESH_TOKEN}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
    changePassword: build.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: ({ token, body }) => ({
        url: `${API_ENDPOINTS.CHANGE_PASSWORD}`,
        method: METHOD_TYPE.put,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      }),
    }),
    forgetPassword: build.mutation<
      ForgetPasswordResponse,
      ForgetPasswordRequest
    >({
      query: (data) => ({
        url: `${API_ENDPOINTS.FORGET_PASSWORD}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
  }),
});
