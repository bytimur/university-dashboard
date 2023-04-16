export const BASE_URL = "http://api.oneschool.it-project.uz/api/";

export type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const API_ENDPOINTS = {
  SIGN_IN: "token/",
  SIGN_UP: "new_enrollee/",
  REFRESH_TOKEN: "token/refresh/",
  CHANGE_PASSWORD: "student_enrollees/",
};
