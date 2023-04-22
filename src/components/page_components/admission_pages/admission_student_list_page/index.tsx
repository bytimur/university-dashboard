import FacultyList from "@/src/components/global/faculty_list";
import Header from "@/src/components/global/header";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./style";
const IllustrationCard = dynamic(
  () => import("../../../global/illustrations_card"),
  { ssr: false }
);

const AdmissionStudentListPage = () => {
  const [examlist, setExamlist] = useState(true);
  const { t } = useTranslation();

  return (
    <Container>
      <Header
        titler={{
          title: "Список абитуриентов",
          description: "Прием за 2023-2024",
        }}
      />
      {examlist ? (
        <div className="faculty-content-wrap">
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
              {
                id: 2,
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
                id: 3,
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
              {
                id: 2,
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
                id: 3,
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
              {
                id: 2,
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
                id: 3,
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
              {
                id: 2,
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
                id: 3,
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
        <div className="illustration-wrap">
          <IllustrationCard
            icon="AdmissionFacultyListIllustrationIcon"
            title={t("empty_addmission_faculty_title")}
            description={t("empty_addmission_faculty_description")}
            button={{
              title: "Добавить факультет",
              icon: "AddSquareIcon",
              onClick: () => "click",
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default AdmissionStudentListPage;
