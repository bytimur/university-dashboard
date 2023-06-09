import AdminPage from "@/src/components/page_components/admin_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Список факультетов и направлений</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AdminPage />
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
