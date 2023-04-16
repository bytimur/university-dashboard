import { AppProps } from "next/app";

import Container from "./style";
import Sidebar from "../sidebar";
import AdminSidebar from "../threads/admin_thread/admin_sidebar";

const Layout = ({ Component, pageProps, router }: AppProps) => {
  const isAdmin = false;
  const isWelcome = router.asPath.includes("auth");

  return (
    <Container>
      {!isWelcome ? isAdmin ? <AdminSidebar /> : <Sidebar /> : <div />}
      <Component {...pageProps} />
    </Container>
  );
};

export default Layout;
