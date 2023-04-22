import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FacultyList from "../../global/faculty_list";
import Header from "../../global/header";
import Container from "./style";
const IllustrationCard = dynamic(
  () => import("../../global/illustrations_card"),
  { ssr: false }
);

const AdminPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Header
        titler={{
          title: "Список факультетов и направлений",
          description: "Прием за 2023-2024",
        }}
      />
      {visible ? (
        <div className="faculty-list-wrap">
          <FacultyList
            button={{
              title: "Компьютерная инженерия",
              onClick: () => "click",
            }}
            studentQuantity={{
              title: "Абитуриенты",
              count: 847,
            }}
            directionList={[
              {
                id: 0,
                name: "Мультимедийные технологии",
                student: {
                  title: "Aбитуриенты",
                  count: 233,
                },
                quota: {
                  title: "Kвота",
                  count: 345,
                },
                competition: {
                  title: "Конкуренция",
                  count: 5.76,
                },
              },
              {
                id: 1,
                name: "Мультимедийные технологии",
                student: {
                  title: "Aбитуриенты",
                  count: 233,
                },
                quota: {
                  title: "Kвота",
                  count: 345,
                },
                competition: {
                  title: "Конкуренция",
                  count: 5.76,
                },
              },
            ]}
          />
        </div>
      ) : (
        <div className="illustration-car-wrap">
          <IllustrationCard
            icon="AdmissionFacultyListIllustrationIcon"
            title={t("faculty_add_title")}
            description={t("faculty_add_description")}
            button={{
              title: t("button_faculty_add"),
              icon: "DocumentUploadLinerIcon",
              onClick: () => router.push("/admin/create_faculty"),
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default AdminPage;
