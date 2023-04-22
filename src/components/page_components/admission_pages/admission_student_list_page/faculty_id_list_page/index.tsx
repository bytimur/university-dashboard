import Header from "@/src/components/global/header";
import Table from "@/src/components/global/table";
import StatusIndicator from "@/src/components/global/table/status_indicator";
import { StatusIndicatorProps } from "@/src/components/global/table/status_indicator/status-indicator";
import { TableHeadingType } from "@/src/components/global/table/table";
import TableListDescItem from "@/src/components/global/table/table_list_desc_item";
import { TableListDescItemProps } from "@/src/components/global/table/table_list_desc_item/table-list-desc-item";
import TableScoreItem from "@/src/components/global/table/table_list_desc_item/table_score_item";
import { TableScoreProps } from "@/src/components/global/table/table_list_desc_item/table_score_item/table-score";
import TabBar from "@/src/components/global/tab_bar";
import { FacultyIdListData } from "@/src/resources/demo-data";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "./style";

type DataType = {
  id: number;
  name: TableListDescItemProps;
  formStage: TableListDescItemProps;
  facultyDirection: TableListDescItemProps;
  subject1: string;
  subject2: string;
  subject3: string;
  subject4: string;
  totalSubject: string;
  status: StatusIndicatorProps;
};

const FacultyIdListPage = () => {
  const [selected, setSelected] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    const filter = router.query.filter as string | undefined;
    if (!filter) {
      router.replace(
        `/admission/students_list/faculty_id?filter=all`,
        `/admission/students_list/faculty_id?filter=all`,
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
    router.replace(
      `/admission/students_list/faculty_id?filter=${key}`,
      `/admission/students_list/faculty_id?filter${key}`,
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
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
      status: {
        title: "Новое",
        type: "returned",
      },
    },
    {
      id: 2,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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
      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
      status: {
        title: "Новое",
        type: "approved",
      },
    },
  ];
  const considerationData: DataType[] = [
    {
      id: 0,
      name: {
        title: "Bahriddinov Fazliddin Shamsiddinovich",
      },

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",

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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",

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

      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",

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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",

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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },

      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },

      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },

      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "Очное",
      },

      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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

      formStage: {
        title: "Бакалавриат",
        subTitle: "new",
      },
      facultyDirection: {
        title: "Компьютерная инженерия",
        subTitle: "Мультимедийные технологии",
      },
      subject1: "100",
      subject2: "100",
      subject3: "100",
      subject4: "100",
      totalSubject: "100",
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
    { text: "Этап/Форма" },
    { text: "Язык/Направление" },
    { text: "Математика", width: 100 },
    { text: "Логика ", width: 100 },
    { text: "Родной ", width: 100 },
    { text: "Английский язык ", width: 100 },
    { text: "Общий ", width: 100 },
    { text: "Cтатус" },
  ];

  const row = useCallback((e: DataType) => {
    return [
      {
        render: <TableListDescItem title={e.name.title} />,
      },
      {
        render: (
          <TableListDescItem
            title={e.formStage.title}
            subTitle={e.formStage.subTitle}
          />
        ),
      },
      {
        render: (
          <TableListDescItem
            title={e.facultyDirection.title}
            subTitle={e.facultyDirection.subTitle}
          />
        ),
      },
      {
        render: <TableScoreItem score={e.subject1} />,
      },
      {
        render: <TableScoreItem score={e.subject2} />,
      },
      {
        render: <TableScoreItem score={e.subject3} />,
      },
      {
        render: <TableScoreItem score={e.subject4} />,
      },
      {
        render: <TableScoreItem score={e.totalSubject} type="total" />,
      },
      {
        render: <StatusIndicator type={e.status.type} title={e.status.title} />,
      },
    ];
  }, []);

  return (
    <Container>
      <Header
        backButton={() => "click"}
        titler={{
          title: "Компьютерный инжиниринг",
          description: "Прием за 2023-2024",
        }}
        searchField
        buttons={{
          leftButton: {
            icon: "VuesaxLinearSettingIcon",
            title: "Фильтр",
            onClick: () => "click",
            type: "outline",
          },
          rightButton: {
            icon: "ExportIcon",
            title: "Экспорт",
            onClick: () => "click",
            type: "outline",
          },
        }}
      />
      <div className="tabbar-wrap">
        {FacultyIdListData.map((item) => (
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

export default FacultyIdListPage;
