import { SignupRequest } from "./auth-service.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_ENDPOINTS } from "../../api_endpoints";
import {
  ChangePasswordRequest,
  ChangePasswordResponses,
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
        method: "POST",
        body: data,
      }),
    }),
    signup: build.mutation<SignupResponse, SignupRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.SIGN_UP}`,
        method: "POST",
        body: data,
      }),
    }),
    refreshToken: build.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.REFRESH_TOKEN}`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: build.mutation<
      ChangePasswordRequest,
      ChangePasswordResponses
    >({
      query: (data) => ({
        url: `${API_ENDPOINTS.CHANGE_PASSWORD}/${data.id}/change_password`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
