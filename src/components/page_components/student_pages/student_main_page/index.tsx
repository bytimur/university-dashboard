import { useCallback } from "react";

import StudentBidCard from "./student_bid_card";
import StudentBidInfoCard from "./student_bid_info_card";
import Container from "./style";
import Router from "next/router";
import { TableListDescItemProps } from "@/src/components/global/table/table_list_desc_item/table-list-desc-item";
import { StatusIndicatorProps } from "@/src/components/global/table/status_indicator/status-indicator";
import { TotalScoreCardProps } from "@/src/components/global/total_score_card/total-score-card";
import { TableHeadingType } from "@/src/components/global/table/table";
import TableListDescItem from "@/src/components/global/table/table_list_desc_item";
import StatusIndicator from "@/src/components/global/table/status_indicator";
import Header from "@/src/components/global/header";
import Table from "@/src/components/global/table";
import TotalScoreCard from "@/src/components/global/total_score_card";

type DataType = {
  id: number;
  date: TableListDescItemProps;
  status: StatusIndicatorProps;
  reason: string;
};

const data: DataType[] = [
  {
    id: 0,
    date: {
      title: "2023/07/29 13:45",
      subTitle: "Приемная комиссия",
    },
    reason: "-",
    status: {
      title: "Одобрено",
      type: "approved",
    },
  },
  {
    id: 1,
    date: {
      title: "2023/07/29 13:45",
      subTitle: "Абитурент",
    },
    reason: "-",
    status: {
      title: "Повторное",
      type: "repeated",
    },
  },
  {
    id: 2,
    date: {
      title: "2023/07/29 13:45",
      subTitle: "Приемная комиссия",
    },
    reason:
      "Необходимо загрузить фотографию паспорта и удостоверение личности в хорошем качестве.Поэтому мы просим повторно загрузить все фотографии в хорошем качестве.",
    status: {
      title: "Возвращено",
      type: "returned",
    },
  },
  {
    id: 3,
    date: {
      title: "2023/07/29 13:45",
      subTitle: "Приемная комиссия",
    },
    reason: "-",
    status: {
      title: "Новое",
      type: "new",
    },
  },
  // {
  //   id: 4,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 5,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 6,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 7,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 8,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 9,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 10,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
  // {
  //   id: 11,
  //   date: {
  //     title: "2023/07/29 13:45",
  //     subTitle: "Приемная комиссия",
  //   },
  //   reason: "-",
  //   status: {
  //     title: "Новое",
  //     type: "new",
  //   },
  // },
];

const totalScoreData: TotalScoreCardProps[] = [
  {
    id: 0,
    title: "Математика",
    score: 95,
  },
  {
    id: 1,
    title: "Физика",
    score: 97,
  },
  {
    id: 2,
    title: "Родной язык и литература",
    score: 92,
  },
  {
    id: 3,
    title: "Итого",
    score: 94.5,
  },
];

const StudentMainPage = () => {
  const headings: TableHeadingType[] = [
    { text: "Дата" },
    { text: "Причина", width: 500 },
    { text: "Статус " },
  ];

  const row = useCallback((e: DataType) => {
    return [
      {
        render: (
          <TableListDescItem title={e.date.title} subTitle={e.date.subTitle} />
        ),
      },
      {
        render: (
          <div
            style={{
              display: "grid",
              maxWidth: 434,
            }}
          >
            {e.reason}
          </div>
        ),
      },
      {
        render: <StatusIndicator type={e.status.type} title={e.status.title} />,
      },
    ];
  }, []);

  return (
    <Container>
      <Header
        titler={{
          title: "Главное",
          description: "Прием за 2022-2023",
        }}
      />
      <div className="bid-wrap">
        <StudentBidCard
          bidNumber="№20230712211"
          bidDate="2022-04-31"
          status={{
            title: "Одобрено",
            type: "approved",
          }}
          button={{
            title: "Посмотреть заявку",
            onClick: () => Router.push("/student/application/create"),
          }}
          bidInfo={[
            {
              id: 0,
              title: "Цель заявки",
              description: "Прием на учебу",
            },
            {
              id: 1,
              title: "Этап",
              description: "Бакалавриат",
            },
            {
              id: 2,
              title: "Форма",
              description: "Очное",
            },
            {
              id: 3,
              title: "Язык",
              description: "Русский",
            },
            {
              id: 4,
              title: "Факультет",
              description: "Компьютерная инженерия",
            },
            {
              id: 5,
              title: "Направление",
              description: "Мультимедийные технологии",
            },
          ]}
        />
        <div className="score-and-notification-wrap">
          <div className="total-score-wrap">
            {totalScoreData.map((item) => (
              <TotalScoreCard
                key={item.id}
                title={item.title}
                score={item.score}
              />
            ))}
          </div>
          <StudentBidInfoCard />
        </div>
      </div>
      <div className="table-wrap">
        <Table headings={headings} row={row} data={data} />
      </div>
    </Container>
  );
};

export default StudentMainPage;
