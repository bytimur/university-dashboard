import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_ENDPOINTS, METHOD_TYPE } from "../../api_endpoints";
import {
  StudentEnrolleeRequest,
  StudentEnrolleeResponse,
} from "./student-enrollee-service";

export const studentEnrolleeAPI = createApi({
  reducerPath: "studentEnrolleeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["STUDENT_ENROLLEE"],
  endpoints: (build) => ({
    createStudentEnrollee: build.mutation<
      StudentEnrolleeResponse,
      StudentEnrolleeRequest
    >({
      query: (data) => ({
        url: `${API_ENDPOINTS.STUDENT_ENROLLEE}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
    updateStudentEnrollee: build.mutation<
      StudentEnrolleeResponse,
      StudentEnrolleeRequest
    >({
      query: (data) => ({
        url: `${API_ENDPOINTS.STUDENT_ENROLLEE}`,
        method: METHOD_TYPE.put,
        body: data,
      }),
    }),
  }),
});
