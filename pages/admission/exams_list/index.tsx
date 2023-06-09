import AddmissionExamListPage from "@/src/components/page_components/admission_pages/admission_exams_list_page";
import ApplicationExamsListPage from "@/src/components/page_components/admission_pages/admission_exams_list_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function AdmissionExamList() {
  return (
    <>
      <Head>
        <title>Список экзаменов</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AddmissionExamListPage />
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
