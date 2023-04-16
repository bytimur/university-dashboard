import { appWithTranslation } from "next-i18next";
import Layout from "../src/components/global/layout";
import "../styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function App(props: AppProps) {
  return (
    <Provider store={store}>
      <NiceModal.Provider>
        <Layout {...props} />
      </NiceModal.Provider>
    </Provider>
  );
}

export default appWithTranslation(App);
