import NiceModal from "@ebay/nice-modal-react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authAPI } from "./services/auth_service";

const rootReducer = combineReducers({
  modals: NiceModal.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: false,
    // enhancers: [devToolsEnhancer({})],
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authAPI.middleware),
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
