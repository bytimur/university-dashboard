import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalSliceType } from "./global-slice";

const initialState: GlobalSliceType = {};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});
