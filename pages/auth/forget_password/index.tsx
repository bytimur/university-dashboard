import AuthChangePasswordPage from "@/src/components/page_components/auth_pages/auth_change_password_page";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Изменить пароль</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AuthChangePasswordPage />
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
