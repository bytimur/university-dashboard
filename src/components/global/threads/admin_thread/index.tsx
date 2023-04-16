import { AppProps } from "next/app";
import AdminSidebar from "./admin_sidebar";
import Container from "./style";

const AdminThread = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <AdminSidebar />
      <Component {...pageProps} />
    </Container>
  );
};

export default AdminThread;
