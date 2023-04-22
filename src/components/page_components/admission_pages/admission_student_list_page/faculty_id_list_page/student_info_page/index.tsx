import Header from "@/src/components/global/header";
import PersonalSubjectCard from "@/src/components/global/personal_subject_card";
import StudentFillingBidInfoCard from "@/src/components/page_components/student_pages/student_filing_bid_page/student_filling_bid_info_card";
import Container from "./style";

const StudentInfoPage = () => {
  return (
    <Container>
      <Header
        backButton={() => "back"}
        titler={{
          title: "Fazliddin Bahriddinov Fazliddin",
          description: "Прием за 2023-2024",
        }}
        buttons={{
          rightButton: {
            icon: "StoryIcon",
            title: "Применить",
            onClick: () => "apply",
            type: "fill",
          },
        }}
      />
      <div className="info-wrap">
        <StudentFillingBidInfoCard
          title="Паспортные данные"
          bidInfo={[
            {
              id: 0,
              title: "Имя",
              subTitle: "Timur",
            },
            {
              id: 1,
              title: "Фамилия",
              subTitle: "Amiraliev",
            },
            {
              id: 2,
              title: "Отчество",
              subTitle: "Orinbekovich",
            },
            {
              id: 3,
              title: "Дата рождения",
              subTitle: "1998/05/28",
            },
            {
              id: 4,
              title: "Пол",
              subTitle: "Мужчина",
            },
            {
              id: 5,
              title: "Гражданство",
              subTitle: "Узбекистан",
            },
            {
              id: 6,
              title: "Паспорт/ID карта",
              subTitle: "AC 9393003",
            },
            {
              id: 7,
              title: "ПНФЛ",
              subTitle: "3199404239188190",
            },
          ]}
        />

        <StudentFillingBidInfoCard
          title="Результаты экзаменов"
          bidInfo={[
            {
              id: 0,
              title: "Этап",
              subTitle: "Бакалавриат",
            },
            {
              id: 1,
              title: "Форма",
              subTitle: "Очное ",
            },
            {
              id: 2,
              title: "Язык",
              subTitle: "Русский",
            },
            {
              id: 3,
              title: "Факультет",
              subTitle: "Компьютерная инженерия",
            },
            {
              id: 4,
              title: "Направление",
              subTitle: "Мультимедийные технологии",
            },
          ]}
        />
        <div className="score-wrap">
          <PersonalSubjectCard title="Математика" description="0" />
          <PersonalSubjectCard title="Математика" description="0" />
          <PersonalSubjectCard title="Математика" description="0" />
        </div>
      </div>
    </Container>
  );
};

export default StudentInfoPage;
