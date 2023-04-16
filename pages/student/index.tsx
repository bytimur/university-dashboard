import StudentMainPage from "@/src/components/page_components/student_pages/student_main_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function StudentMain() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <StudentMainPage />
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