import { AppProps } from "next/app";
import Container from "./style";
import Sidebar from "../sidebar";
import AdminSidebar from "../threads/admin_thread/admin_sidebar";
import { useGetAllClassifiers } from "@/src/utils/getAllClassifiers";

const Layout = ({ Component, pageProps, router }: AppProps) => {
  const isAdmin = router.asPath.includes("admin");
  const isWelcome = router.asPath.includes("auth");
  useGetAllClassifiers();

  return (
    <Container>
      {!isWelcome ? isAdmin ? <AdminSidebar /> : <Sidebar /> : <div />}
      <Component {...pageProps} />
    </Container>
  );
};

export default Layout;
