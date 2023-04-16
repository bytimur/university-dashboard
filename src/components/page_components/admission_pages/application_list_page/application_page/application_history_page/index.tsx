import Header from "@/src/components/global/header";
import Table from "@/src/components/global/table";
import StatusIndicator from "@/src/components/global/table/status_indicator";
import { StatusIndicatorProps } from "@/src/components/global/table/status_indicator/status-indicator";
import { TableHeadingType } from "@/src/components/global/table/table";
import TableListDescItem from "@/src/components/global/table/table_list_desc_item";
import { TableListDescItemProps } from "@/src/components/global/table/table_list_desc_item/table-list-desc-item";
import TabBar from "@/src/components/global/tab_bar";
import { applicationPersonalData } from "@/src/resources/demo-data";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Container from "./style";

type DataType = {
  id: number;
  date: TableListDescItemProps;
  status: StatusIndicatorProps;
  reason: TableListDescItemProps;
};

const ApplicationHistoryPage = () => {
  const data: DataType[] = [
    {
      id: 0,
      date: {
        title: "2023/07/29 13:45",
        subTitle: "Приемная комиссия",
      },
      reason: {
        title: "-",
      },
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
      reason: {
        title: "-",
      },
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
      reason: {
        title:
          "Необходимо загрузить фотографию паспорта и удостоверение личности в хорошем качестве.Поэтому мы просим повторно загрузить все фотографии в хорошем качестве.",
      },
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
      reason: {
        title: "-",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
  ];

  const headings: TableHeadingType[] = [
    { text: "Дата", width: 300 },
    { text: "Причина" },
    { text: "Статус ", width: 200 },
  ];

  const row = useCallback((e: DataType) => {
    return [
      {
        render: (
          <TableListDescItem title={e.date.title} subTitle={e.date.subTitle} />
        ),
      },
      {
        render: <TableListDescItem title={e.reason.title} />,
      },
      {
        render: <StatusIndicator type={e.status.type} title={e.status.title} />,
      },
    ];
  }, []);

  const router = useRouter();
  return (
    <Container>
      <Header
        backButton={() => "click"}
        titler={{
          title: "Заявка № 20230712211",
          description: "Прием за 2023-2024",
        }}
        buttons={{
          rightButton: {
            icon: "StoryIcon",
            title: "Применить",
            type: "fill",
            onClick: () => "click",
          },
        }}
      />
      <div className="tabbar-wrap">
        {applicationPersonalData.map((item) => (
          <TabBar
            {...item}
            key={item.route}
            icon={item.icon}
            title={item.title}
            isActive={router.asPath === item.route}
            onClick={() => router.push(item.route)}
          />
        ))}
      </div>
      <Table headings={headings} row={row} data={data} />
    </Container>
  );
};

export default ApplicationHistoryPage;
