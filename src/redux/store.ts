import { classifiersAPI } from "./services/classifiers_service/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import NiceModal from "@ebay/nice-modal-react";
import { globalSlice, classifiersSlice } from "./reducers";
import { authAPI } from "./services/auth_service";
import { studentEnrolleeAPI } from "./services/student_enrollee_service";

const rootReducer = combineReducers({
  modals: NiceModal.reducer,
  global: globalSlice.reducer,
  classifiers: classifiersSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [studentEnrolleeAPI.reducerPath]: studentEnrolleeAPI.reducer,
  [classifiersAPI.reducerPath]: classifiersAPI.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: false,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authAPI.middleware,
        studentEnrolleeAPI.middleware,
        classifiersAPI.middleware
      ),
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
