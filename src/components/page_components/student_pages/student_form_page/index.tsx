import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Container from "./style";

import {
  DATEPICKER_SCHEMA,
  SCHEMA_INPUT_EMAIL,
  SCHEMA_INPUT_NUMBER,
  SCHEMA_INPUT_TEXT,
  SELECT_SCHEMA,
} from "@/src/resources/yup";
import TextProvider from "@/src/components/global/providers/text_provider";
import Header from "@/src/components/global/header";
import LittleImageCard from "@/src/components/global/image_cards/little_image_card";
import MainInput from "@/src/components/global/main_input";
import SelectCopy from "@/src/components/global/select";
import { useState } from "react";
import InputDate from "@/src/components/global/input_date";

const StudentFormPage = () => {
  const [date, setDate] = useState("");
  const handleChange = (date: string | null) => {
    if (date) setDate(date);
  };

  const yupValidation = yup.object({
    name: SCHEMA_INPUT_TEXT,
    secondName: SCHEMA_INPUT_TEXT,
    lastName: SCHEMA_INPUT_TEXT,
    sex: SELECT_SCHEMA,
    citizenship: SELECT_SCHEMA,
    passportSeries: SCHEMA_INPUT_TEXT,
    passportNumber: SCHEMA_INPUT_NUMBER,
    region: SELECT_SCHEMA,
    city: SELECT_SCHEMA,
    street: SCHEMA_INPUT_TEXT,
    phoneNumber: SCHEMA_INPUT_TEXT,
    email: SCHEMA_INPUT_EMAIL,
    purposeBid: SELECT_SCHEMA,
    completedEducational: SELECT_SCHEMA,
    diplomNumber: SCHEMA_INPUT_TEXT,
    datePicker: DATEPICKER_SCHEMA,
  });
  const {
    register,
    control,
    handleSubmit,
    watch,
    setFocus,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    shouldFocusError: false,
    resolver: yupResolver(yupValidation),
  });
  console.log(isValid);
  const onSubmit = (data: any) => console.log(data);

  const data = [
    { id: 0, value: 1, label: "Мужской" },
    { id: 1, value: 2, label: "Женский" },
  ];
  const citizenshipData = [
    { id: 0, value: 1, label: "Узбекистан" },
    { id: 1, value: 2, label: "Казахстан" },
    { id: 1, value: 2, label: "Таджикистан" },
    { id: 1, value: 2, label: "Кыргызстан" },
  ];
  const region = [
    { value: 1, label: "Ташкентская область" },
    { value: 2, label: "Кашкадарьинская область" },
    { value: 3, label: "Сурхандарьинская область" },
    { value: 4, label: "Джизакская область" },
  ];
  const city = [
    { id: 0, value: 1, label: "Ташкент" },
    { id: 1, value: 2, label: "Карши" },
    { id: 1, value: 2, label: "Сурхандарья" },
    { id: 1, value: 2, label: "Джизак" },
  ];
  const purposeBid = [
    { id: 0, value: 1, label: "Прием на учебу" },
    { id: 1, value: 2, label: "По фану" },
  ];
  const completedEducational = [
    { id: 0, value: 1, label: "Академический лицей" },
    { id: 1, value: 2, label: "ТТИЛП" },
  ];

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Header
        titler={{
          title: "Подача заявления",
          description: "2023-2024",
        }}
        buttons={{
          leftButton: {
            icon: "DocumentDownloadIcon",
            title: "Отправить заявку",
            type: "fill",
            onClick: handleSubmit(onSubmit),
          },
        }}
      />
      <div className="content-wrap">
        <div className="personal-info-wrap">
          <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              Паспортные данные
            </TextProvider>
            <div className="input-wrapper">
              <MainInput
                placeholder="Имя"
                name="phoneNumber"
                register={register("name")}
                error={errors?.name?.message && (errors.name.message as string)}
                options={{
                  disabled: false,
                  setFocus: () => setFocus("phoneNumber"),
                }}
              />
              <MainInput
                placeholder="Фамилия"
                name="secondName"
                register={register("secondName")}
                error={
                  errors?.secondName?.message &&
                  (errors.secondName.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("secondName"),
                }}
              />
              <MainInput
                placeholder="Отчество"
                name="lastName"
                register={register("lastName")}
                error={
                  errors?.lastName?.message &&
                  (errors.lastName.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("lastName"),
                }}
              />
              <InputDate
                placeholder="Дата рождения"
                name="date"
                register={register("datePicker")}
                error={
                  errors?.datePicker?.message &&
                  (errors.datePicker.message as string)
                }
              />
              {/* <MainInput
                placeholder="Дата рождения"
                name="date"
                register={register("datePicker")}
                error={
                  errors?.datePicker?.message &&
                  (errors.datePicker.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("datePicker"),
                  type: "date",
                }}
              /> */}
              <SelectCopy
                placeholder="Пол"
                data={data}
                name="sex"
                control={control}
                error={errors?.sex?.message && (errors?.sex?.message as string)}
              />
              <SelectCopy
                placeholder="Гражданство"
                data={citizenshipData}
                name="citizenship"
                control={control}
                error={
                  errors?.citizenship?.message &&
                  (errors?.citizenship?.message as string)
                }
              />
              <MainInput
                placeholder="Паспорт/ID карта"
                name="passportSeries"
                register={register("passportSeries")}
                error={
                  errors?.passportSeries?.message &&
                  (errors.passportSeries.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("passportSeries"),
                }}
              />
              <MainInput
                placeholder="ПНФЛ"
                name="passportNumber"
                register={register("passportNumber")}
                error={
                  errors?.passportNumber?.message &&
                  (errors.passportNumber.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("passportSeries"),
                }}
              />
            </div>
          </div>
          <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              Данные адреса
            </TextProvider>
            <div className="input-wrapper">
              <SelectCopy
                placeholder="Область"
                data={region}
                name="region"
                control={control}
                error={
                  errors?.region?.message && (errors?.region?.message as string)
                }
              />
              <SelectCopy
                placeholder="Город/Район"
                data={city}
                name="city"
                control={control}
                error={
                  errors?.city?.message && (errors?.city?.message as string)
                }
              />
              <MainInput
                placeholder="Махалля, Улица, Дом"
                name="street"
                register={register("street")}
                error={
                  errors?.street?.message && (errors.street.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("street"),
                }}
              />
            </div>
          </div>
          <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              Контактные данные
            </TextProvider>
            <div className="input-wrapper">
              <MainInput
                placeholder="Почта"
                name="email"
                register={register("email")}
                error={
                  errors?.email?.message && (errors.email.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("email"),
                }}
              />
              <MainInput
                placeholder="Номер телефона"
                name="phoneNumber"
                register={register("phoneNumber")}
                error={
                  errors?.phoneNumber?.message &&
                  (errors.phoneNumber.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("phoneNumber"),
                }}
              />
            </div>
          </div>
          <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              Образование
            </TextProvider>
            <div className="input-wrapper">
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />
              <SelectCopy
                placeholder="Завершенное Учеб. заведение"
                data={purposeBid}
                name="completedEducational"
                control={control}
                error={
                  errors?.completedEducational?.message &&
                  (errors?.completedEducational?.message as string)
                }
              />
              <MainInput
                placeholder="Номер диплома/аттестата"
                name="diplomNumber"
                register={register("diplomNumber")}
                error={
                  errors?.diplomNumber?.message &&
                  (errors.diplomNumber.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("diplomNumber"),
                }}
              />
            </div>
          </div>
          <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              Заявление
            </TextProvider>
            <div className="input-wrapper">
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />{" "}
              <SelectCopy
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  (errors?.purposeBid?.message as string)
                }
              />
            </div>
          </div>
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

export default StudentFormPage;
