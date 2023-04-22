import Header from "@/src/components/global/header";
import LittleImageCard from "@/src/components/global/image_cards/little_image_card";
import TextProvider from "@/src/components/global/providers/text_provider";
import TabBar from "@/src/components/global/tab_bar";
import { applicationPersonalData } from "@/src/resources/demo-data";
import { useRouter } from "next/router";
import StudentFillingBidInfoCard from "../../../student_pages/student_filing_bid_page/student_filling_bid_info_card";
import Container from "./style";

const ApplicationPage = () => {
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
      <div className="application-page-content-wrap">
        <div className="content-personal-info">
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
            title="Данные адреса"
            bidInfo={[
              {
                id: 0,
                title: "Область",
                subTitle: "Город Ташкент",
              },
              {
                id: 1,
                title: "Город/Район",
                subTitle: "Юнусабадский район",
              },
              {
                id: 2,
                title: "Махалля, Улица, Дом",
                subTitle: "ул. Низами, 2/3/4",
              },
            ]}
          />
          <StudentFillingBidInfoCard
            title="Контактные данные"
            bidInfo={[
              {
                id: 0,
                title: "Почта",
                subTitle: "fazliddin@email.com",
              },
              {
                id: 1,
                title: "Номер телефона",
                subTitle: "+998 99 999 99 99",
              },
            ]}
          />
          <StudentFillingBidInfoCard
            title="Образование"
            bidInfo={[
              {
                id: 0,
                title: "Цель применения",
                subTitle: "Прием на учебу",
              },
              {
                id: 1,
                title: "Завершенное Учеб. заведение",
                subTitle: "Академический лицей при УзГумя №2",
              },
              {
                id: 2,
                title: "Номер диплома/аттестатa",
                subTitle: "B 358276",
              },
            ]}
          />
          <StudentFillingBidInfoCard
            title="Заявление"
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
                title: "Язык",
                subTitle: "Русский",
              },
              {
                id: 4,
                title: "Факультет",
                subTitle: "Компьютерная инженерия",
              },
              {
                id: 5,
                title: "Направление",
                subTitle: "Мультимедийные технологии",
              },
            ]}
          />
        </div>
        <div className="image-file-wrap">
          <TextProvider
            options={{
              textType: {
                bold: "bold16|18",
              },
            }}
          >
            Загруженные файлы
          </TextProvider>
          <div className="image-file-content-wrap">
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ApplicationPage;
