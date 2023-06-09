import ApplicationListPage from "@/src/components/page_components/admission_pages/application_list_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function AdmissionApplicationListMain() {
  return (
    <>
      <Head>
        <title>Список заявлений</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ApplicationListPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
