import Header from "@/src/components/global/header";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import Container from "./style";
const IllustrationCard = dynamic(
  () => import("../../../global/illustrations_card"),
  { ssr: false }
);

const AddmissionExamListPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header
        titler={{
          title: "Список экзаменов",
          description: "Прием за 2023-2024",
        }}
        searchField
        buttons={{
          leftButton: {
            type: "outline",
            icon: "VuesaxLinearSettingIcon",
            title: "Фильтры",
            onClick: () => "filtr",
          },
          rightButton: {
            type: "fill",
            icon: "AddSquareIcon",
            title: "Добавить экзамен",
            onClick: () => "add exam",
          },
        }}
      />
      <div className="illustration-wrap">
        <IllustrationCard
          icon="AdmissionExamIllustrationIcon"
          title={t("empty_addmission_exam_title")}
          description={t("empty_addmission_exam_description")}
          button={{
            title: "Подать заявку",
            icon: "AddSquareIcon",
            onClick: () => "click",
          }}
        />
      </div>
    </Container>
  );
};

export default AddmissionExamListPage;
