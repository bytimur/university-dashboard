import { useTranslation } from "next-i18next";
import FacultyList from "../../../global/faculty_list";
import Header from "../../../global/header";
import IconProvider from "../../../global/providers/icon_provider";
import TextProvider from "../../../global/providers/text_provider";
import Container from "./style";
import dynamic from "next/dynamic";
const VideoPlayer = dynamic(() => import("../../../global/video_player"), {
  ssr: false,
});

const StudentUniversityPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header
        titler={{
          title: t("home"),
          description: "Прием за 2023-2024",
        }}
        buttons={{
          leftButton: {
            icon: "DocumentDownloadIcon",
            title: "Подача заявления",
            type: "fill",
            onClick: () => "click",
          },
        }}
      />
      <div className="university-titler">
        <img src="/images/tatu.png" alt="/images/tatu.png" />
        <TextProvider
          options={{
            textType: {
              bold: "bold24|32",
            },
          }}
        >
          ТАШКЕНТСКИЙ УНИВЕРСИТЕТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ ИМЕНИ МУХАММАДА
          АЛ-ХОРАЗМИЙ
        </TextProvider>
      </div>
      <div className="university-photo-wrap">
        <div className="photo-titler">
          <TextProvider
            options={{
              textType: {
                regular: "regular16|18",
              },
            }}
          >
            Узбекистан, Ташкент, 2020
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                regular: "regular16|18",
              },
            }}
          >
            TATU - Основной кампус университета
          </TextProvider>
        </div>
        <img
          src="/images/univer.png"
          alt="/images/univer.png"
          className="univer-image"
        />
      </div>
      <div className="main-info-about-univer-wrap">
        <TextProvider
          options={{
            textType: {
              bold: "bold24|32",
            },
          }}
        >
          ОСНОВАНАЯ ИНФОРМАЦИЯ
        </TextProvider>
        <div className="main-info-content">
          <div className="main-info-content-descript">
            <TextProvider
              options={{
                textType: {
                  medium: "medium16|18",
                },
              }}
            >
              ТУИТ (бывший Ташкентский электротехнический институт связи) был
              образован в 1955 г., Указом Президента Республики Узбекистан
              №УП-3080 от 30 мая 2002 г. преобразован в Ташкентский университет
              информационных технологий. Постановлением Президента Республики
              Узбекистан №ПП-91 от 2 июня 2005 г. организованы региональные
              филиалы ТУИТ в городах Карши, Нукус, Самарканд, Ургенч и Фергана.
            </TextProvider>
            <button onClick={() => "click"} className="button-link">
              <TextProvider
                options={{
                  textType: {
                    medium: "medium16|18",
                  },
                  color: "static_primary_solid",
                }}
              >
                Официальный сайт
              </TextProvider>
              <IconProvider icon="ExportIcon" color="static_primary_solid" />
            </button>
          </div>
          <VideoPlayer />
        </div>
      </div>
      <div className="faculty-wrap">
        <TextProvider
          options={{
            textType: {
              bold: "bold24|32",
            },
          }}
        >
          ФАКУЛЬТЕТЫ
        </TextProvider>
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
    </Container>
  );
};

export default StudentUniversityPage;
