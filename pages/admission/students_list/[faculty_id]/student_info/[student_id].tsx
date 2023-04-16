import StudentInfoPage from "@/src/components/page_components/admission_pages/admission_student_list_page/faculty_id_list_page/student_info_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function AdmissionStudentListStudentInfo() {
  return (
    <>
      <Head>
        <title>Факультет</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <StudentInfoPage />
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