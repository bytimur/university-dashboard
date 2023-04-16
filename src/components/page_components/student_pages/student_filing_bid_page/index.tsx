import Header from "../../../global/header";
import LittleImageCard from "../../../global/image_cards/little_image_card";
import TextProvider from "../../../global/providers/text_provider";
import StudentFillingBidInfoCard from "./student_filling_bid_info_card";
import Container from "./style";
import Router from "next/router";

const StudentFillingBidPage = () => {
  return (
    <Container>
      <Header
        titler={{
          title: "Подача заявления",
          description: "Прием за 2023-2024",
        }}
      />
      <div className="content-wrap">
        <div className="bid-info-card-wrap">
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
        <div className="bid-image-card-wrap">
          <TextProvider
            options={{
              textType: {
                bold: "bold16|18",
              },
            }}
          >
            Загрузить файлы
          </TextProvider>
          <div className="bid-image-card-content">
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
              button={{
                title: "Загрузить фото",
                onClick: () => "click",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
              button={{
                title: "Загрузить фото",
                onClick: () => "click",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мой диплом.jpeg",
              }}
              button={{
                title: "Загрузить фото",
                onClick: () => "click",
              }}
            />
            <LittleImageCard
              photo="/images/avatar.png"
              titler={{
                title: "Фотография (3х4)",
                description: "Мое диплом.jpeg",
              }}
              button={{
                title: "Загрузить фото",
                onClick: () => "click",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudentFillingBidPage;
