import { AppProps } from "next/app";
import Sidebar from "../../sidebar";
import Container from "./style";

const StudentThead = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Sidebar />
      <Component {...pageProps} />
    </Container>
  );
};

export default StudentThead;
