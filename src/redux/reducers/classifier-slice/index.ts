import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ClassifiersSliceType,
  SelectGovernoratesType,
  SelectAreasType,
  SelectNationalitiesType,
} from "./classifiers-slice.d";

const initialState: ClassifiersSliceType = {
  governorates: [],
  areas: [],
  nationalities: [],
};

export const classifiersSlice = createSlice({
  name: "classifiersSlice",
  initialState,
  reducers: {
    addAllClassifiers(state, action: PayloadAction<ClassifiersSliceType>) {
      state.governorates = action.payload.governorates;
      state.areas = action.payload.areas;
      state.nationalities = action.payload.nationalities;
    },
    addGovernorates(
      state,
      action: PayloadAction<Array<SelectGovernoratesType>>
    ) {
      state.governorates = action.payload;
    },
    addAreas(state, action: PayloadAction<Array<SelectAreasType>>) {
      state.areas = action.payload;
    },
    addNationalities(
      state,
      action: PayloadAction<Array<SelectNationalitiesType>>
    ) {
      state.nationalities = action.payload;
    },
  },
});
