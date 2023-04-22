export const BASE_URL = "http://api.oneschool.it-project.uz/api/";

export const METHOD_TYPE = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export const API_ENDPOINTS = {
  SIGN_IN: "token/",
  SIGN_UP: "new-enrollee/",
  REFRESH_TOKEN: "token/refresh/",
  CHANGE_PASSWORD: "profile/change_password/",
  FORGET_PASSWORD: "forget-password/",
  STUDENT_ENROLLEE: "student_enrollees/",
  GOVERNORATES: "governorates/",
  AREAS: "areas/",
  NATIONALITIES: "nationalities/",
  UPLOAD_FILE: "upload/",
};
