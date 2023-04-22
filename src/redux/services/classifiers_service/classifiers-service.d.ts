import {
  AreasType,
  NationalitiesType,
} from "./../../reducers/classifier-slice/classifiers-slice.d";
import { GovernoratesType } from "../../reducers/classifier-slice/classifiers-slice";

export type GovernoratesRequest = {
  page: number;
  page_size: number;
};

export type GovernoratesResponse = {
  results: GovernoratesType[];
  count: number;
  next: string;
  previous: string;
};

export type AreasRequest = {
  governorate?: number;
  page: number;
  page_size: number;
  search?: string;
};

export type AreasResponse = {
  results: AreasType[];
  count: number;
  next: string;
  previous: string;
};

export type NationalitiesRequest = {
  page: number;
  page_size: number;
};

export type NationalitiesResponse = {
  results: NationalitiesType[];
  count: number;
  next: string;
  previous: string;
};

export type UploadFileRequest = FormData;

export type UploadFileResponse = [
  {
    id: number;
    name: string;
    key: string;
    thumbnail: any;
    thumbnail_150: any;
    url: string;
    created_date: string;
  }
];
