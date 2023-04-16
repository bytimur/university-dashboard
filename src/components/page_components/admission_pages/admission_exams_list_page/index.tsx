import Header from "@/src/components/global/header";
import IllustrationCard from "@/src/components/global/illustrations_card";
import Container from "./style";

const AddmissionExamListPage = () => {
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
          icon="StudentEmptyIcon"
          title="В системе еще нет экзаменов"
          description="Вам необходимо подать заявку для получение ответа приемной комисси и действия по договору"
          button={{
            title: "Подать заявку",
            icon: "DocumentDownloadIcon",
            onClick: () => "click",
          }}
        />
      </div>
    </Container>
  );
};

export default AddmissionExamListPage;
