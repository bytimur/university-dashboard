import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_ENDPOINTS, METHOD_TYPE } from "../../api_endpoints";
import {
  AreasRequest,
  AreasResponse,
  GovernoratesRequest,
  GovernoratesResponse,
  NationalitiesResponse,
  NationalitiesRequest,
  UploadFileResponse,
  UploadFileRequest,
} from "./classifiers-service";

export const classifiersAPI = createApi({
  reducerPath: "studentEnroleeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["STUDENT_ENROLLEE"],
  endpoints: (build) => ({
    governorates: build.mutation<GovernoratesResponse, GovernoratesRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.GOVERNORATES}`,
        method: METHOD_TYPE.get,
        params: data,
      }),
    }),
    areas: build.mutation<AreasResponse, AreasRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.AREAS}`,
        method: METHOD_TYPE.get,
        params: data,
      }),
    }),
    nationalities: build.mutation<NationalitiesResponse, NationalitiesRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.NATIONALITIES}`,
        method: METHOD_TYPE.get,
        params: data,
      }),
    }),
    upload: build.mutation<UploadFileResponse, UploadFileRequest>({
      query: (data) => ({
        url: `${API_ENDPOINTS.UPLOAD_FILE}`,
        method: METHOD_TYPE.post,
        body: data,
      }),
    }),
  }),
});
