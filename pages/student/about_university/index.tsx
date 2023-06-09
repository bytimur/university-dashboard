import StudentUniversityPage from "@/src/components/page_components/student_pages/student_university_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function StudentAboutUniversity() {
  return (
    <>
      <Head>
        <title>Об университете</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <StudentUniversityPage />
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
