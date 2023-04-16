import ActionBarButton from "@/src/components/global/buttons/action_bar_button";
import { ActionBarButtonProps } from "@/src/components/global/buttons/action_bar_button/action-bar-button";
import Header from "@/src/components/global/header";
import Table from "@/src/components/global/table";
import StatusIndicator from "@/src/components/global/table/status_indicator";
import { StatusIndicatorProps } from "@/src/components/global/table/status_indicator/status-indicator";
import { TableHeadingType } from "@/src/components/global/table/table";
import TableListDescItem from "@/src/components/global/table/table_list_desc_item";
import { TableListDescItemProps } from "@/src/components/global/table/table_list_desc_item/table-list-desc-item";
import TabBar from "@/src/components/global/tab_bar";
import { tabBarApplicantpageData, tabBarData } from "@/src/resources/demo-data";
import Router, { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "./style";
// import { useRouter } from "next/router";

type DataType = {
  id: number;
  name: TableListDescItemProps;
  created: TableListDescItemProps;
  formStage: TableListDescItemProps;
  language: string;
  facultyDirection: TableListDescItemProps;
  status: StatusIndicatorProps;
  actionButton: ActionBarButtonProps;
};

const ApplicationListPage = () => {
  const [selected, setSelected] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    const filter = Router.query.filter as string | undefined;
    if (!filter) {
      Router.replace(
        `/admission/applications_list?filter=all`,
        `/admission/applications_list?filter=all`,
        {
          shallow: true,
        }
      );
      return;
    }
    switch (filter) {
      case "all":
        setSelected("all");
        break;
      case "consideration":
        setSelected("consideration");
        break;
      case "rejected":
        setSelected("rejected");
        break;
      case "approved":
        setSelected("approved");
        break;
      default:
        setSelected("all");
        break;
    }
  }, []);

  const handleClick = (key: string) => {
    if (key == selected) return;
    Router.replace(
      `/admission/applications_list?filter=${key}`,
      `/admission/applications_list?filter=${key}`,
      {
        shallow: true,
      }
    );
    setSelected(key);
  };

  const allData: DataType[] = [
    {
      id: 0,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
      actionButton: {
        actionGroupOne: [
          {
            id: 0,
            title: "Открыть",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
        actionGroupTwo: [
          {
            id: 0,
            title: "Принять",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 1,
            title: "Повторение",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 2,
            title: "Отменить",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
      },
    },
    {
      id: 1,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "returned",
      },
      actionButton: {
        actionGroupOne: [
          {
            id: 0,
            title: "Открыть",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
        actionGroupTwo: [
          {
            id: 0,
            title: "Принять",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 1,
            title: "Повторение",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 2,
            title: "Отменить",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
      },
    },
    {
      id: 2,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
      actionButton: {
        actionGroupOne: [
          {
            id: 0,
            title: "Открыть",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
        actionGroupTwo: [
          {
            id: 0,
            title: "Принять",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 1,
            title: "Повторение",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 2,
            title: "Отменить",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
      },
    },

    {
      id: 3,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
      actionButton: {
        actionGroupOne: [
          {
            id: 0,
            title: "Открыть",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
        actionGroupTwo: [
          {
            id: 0,
            title: "Принять",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 1,
            title: "Повторение",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 2,
            title: "Отменить",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
      },
    },
    {
      id: 4,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "approved",
      },
      actionButton: {
        actionGroupOne: [
          {
            id: 0,
            title: "Открыть",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
        actionGroupTwo: [
          {
            id: 0,
            title: "Принять",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 1,
            title: "Повторение",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
          {
            id: 2,
            title: "Отменить",
            onClick: () => "click",
            icon: { iconName: "ExportBoldIcon", color: "second_text" },
          },
        ],
      },
    },
  ];
  const considerationData: DataType[] = [
    {
      id: 0,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
    {
      id: 1,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
    {
      id: 2,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
    {
      id: 3,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
    {
      id: 4,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "new",
      },
    },
  ];
  const rejectedData: DataType[] = [
    {
      id: 0,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
    },
    {
      id: 1,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
    },
    {
      id: 2,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
    },
    {
      id: 3,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
    },
    {
      id: 4,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Новое",
        type: "rejected",
      },
    },
  ];
  const approvedData: DataType[] = [
    {
      id: 0,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Одобрено",
        type: "approved",
      },
    },
    {
      id: 1,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Одобрено",
        type: "approved",
      },
    },
    {
      id: 2,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Одобрено",
        type: "approved",
      },
    },
    {
      id: 3,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Одобрено",
        type: "approved",
      },
    },
    {
      id: 4,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      created: {
        date: "2022-11-12",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },
      language: "Русский",
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      status: {
        title: "Одобрено",
        type: "approved",
      },
    },
  ];
  const demoData = useMemo(() => {
    const filter = router.query.filter as string | undefined;
    switch (filter) {
      case "all":
        return allData;
      case "consideration":
        return considerationData;

      case "rejected":
        return rejectedData;

      case "approved":
        return approvedData;

      default:
        return allData;
    }
  }, [router.query.filter]);

  const headings: TableHeadingType[] = [
    { text: "Ф.И.О", width: 200 },
    { text: "Создано / №" },
    { text: "Этап/Форма" },
    { text: "Язык" },
    { text: "Факультет / Направление" },
    { text: "Cтатус" },
    { text: "Изменить статус", width: 100 },
  ];

  const row = useCallback((e: DataType) => {
    return [
      {
        render: <TableListDescItem title={e.name.title} />,
      },
      {
        render: (
          <TableListDescItem date={e.created.date} subTitle="20230712211" />
        ),
      },
      {
        render: (
          <TableListDescItem
            title={e.formStage.title}
            subTitle={e.formStage.subTitle}
          />
        ),
      },
      { render: e.language },

      {
        render: (
          <TableListDescItem
            title={e.facultyDirection.title}
            subTitle={e.facultyDirection.subTitle}
          />
        ),
      },
      {
        render: <StatusIndicator type={e.status.type} title={e.status.title} />,
      },
      {
        render: (
          <ActionBarButton
            actionGroupOne={e.actionButton.actionGroupOne}
            actionGroupTwo={e.actionButton.actionGroupTwo}
          />
        ),
      },
    ];
  }, []);

  return (
    <Container>
      <Header
        titler={{
          title: "Список заявлений",
          description: "Прием за 2023-2024",
        }}
        searchField
        buttons={{
          leftButton: {
            icon: "VuesaxLinearSettingIcon",
            title: "Фильтры",
            type: "outline",
            onClick: () => "click",
          },
          rightButton: {
            icon: "ExportIcon",
            title: "Экспорт",
            type: "outline",
            onClick: () => "click",
          },
        }}
      />
      <div className="tabbar-wrap">
        {tabBarApplicantpageData.map((item) => (
          <TabBar
            {...item}
            key={item.key}
            icon={item.icon}
            title={item.title}
            isActive={selected === item.key}
            onClick={() => handleClick(item.key)}
          />
        ))}
      </div>
      <div className="table-wrap">
        <Table headings={headings} row={row} data={demoData} />
      </div>
    </Container>
  );
};

export default ApplicationListPage;
