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

import Header from "@/src/components/global/header";
import MainInput from "@/src/components/global/main_input";
import Select from "@/src/components/global/select";

import InputDate from "@/src/components/global/input_date";
import { useTranslation } from "react-i18next";
import ImageUpload from "@/src/components/global/image_cards/image_upload";
import dynamic from "next/dynamic";
const TextProvider = dynamic(
  () => import("../../../global/providers/text_provider"),
  {
    ssr: false,
  }
);

const yupValidation = yup.object({
  first_name: SCHEMA_INPUT_TEXT,
  midle_name: SCHEMA_INPUT_TEXT,
  last_name: SCHEMA_INPUT_TEXT,
  gender: SELECT_SCHEMA,
  birhtday: DATEPICKER_SCHEMA,
  passport_number: SCHEMA_INPUT_NUMBER,
  pinfl: SCHEMA_INPUT_TEXT,
  nationality: SELECT_SCHEMA,
  governorate: SELECT_SCHEMA,
  area: SELECT_SCHEMA,
  street1: SCHEMA_INPUT_TEXT,
  street2: SCHEMA_INPUT_TEXT,
  mobile: SCHEMA_INPUT_TEXT,
  email: SCHEMA_INPUT_EMAIL,
  school_type: SELECT_SCHEMA,
  school_document_number: SCHEMA_INPUT_TEXT,
  photo_3_4: SCHEMA_INPUT_NUMBER,
  diploma: SCHEMA_INPUT_NUMBER,
  identity_1: SCHEMA_INPUT_NUMBER,
  identity_2: SCHEMA_INPUT_NUMBER,
});

type YupValidationType = yup.InferType<typeof yupValidation>;

const StudentFormPage = () => {
  const { t } = useTranslation();

  const handleImageUpload = (id: number, name: string) => {
    console.log("IMAGE_ID:", id, name);
    setValue(name as "diploma", id, {
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const {
    register,
    control,
    handleSubmit,
    setFocus,
    setValue,
    formState: { isValid, errors },
  } = useForm<YupValidationType>({
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
    { id: 2, value: 3, label: "Таджикистан" },
    { id: 3, value: 4, label: "Кыргызстан" },
  ];
  const region = [
    { id: 0, value: 1, label: "Ташкентская область" },
    { id: 1, value: 2, label: "Кашкадарьинская область" },
    { id: 2, value: 3, label: "Сурхандарьинская область" },
    { id: 3, value: 4, label: "Джизакская область" },
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
              {t("passport_info")}
            </TextProvider>
            <div className="input-wrapper">
              <MainInput
                placeholder="Имя"
                name="phoneNumber"
                register={register("first_name")}
                error={
                  errors?.first_name?.message &&
                  t(errors.first_name.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("first_name"),
                }}
              />
              <MainInput
                placeholder="Фамилия"
                name="secondName"
                register={register("midle_name")}
                error={
                  errors?.midle_name?.message &&
                  t(errors.midle_name.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("midle_name"),
                }}
              />
              <MainInput
                placeholder="Отчество"
                name="lastName"
                register={register("last_name")}
                error={
                  errors?.last_name?.message &&
                  t(errors.last_name.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("last_name"),
                }}
              />
              <InputDate
                placeholder="Дата рождения"
                name="birhtday"
                register={register("birhtday")}
                error={
                  errors?.birhtday?.message &&
                  t(errors.birhtday.message as string)
                }
              />
              <Select
                placeholder="Пол"
                data={data}
                name="gender"
                control={control}
                error={
                  errors?.gender?.message &&
                  t(errors?.gender?.message as string)
                }
                options={{
                  hideSelectedOptions: false,
                }}
              />
              <Select
                placeholder="Национальность"
                data={citizenshipData}
                name="nationality"
                control={control}
                error={
                  errors?.nationality?.message &&
                  t(errors?.nationality?.message as string)
                }
              />
              <MainInput
                placeholder="Паспорт/ID карта"
                name="passportSeries"
                register={register("passport_number")}
                error={
                  errors?.passport_number?.message &&
                  t(errors.passport_number.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("passport_number"),
                }}
              />
              <MainInput
                placeholder="ПНФЛ"
                name="passportNumber"
                register={register("pinfl")}
                error={
                  errors?.pinfl?.message && t(errors.pinfl.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("pinfl"),
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
              {t("address")}
            </TextProvider>
            <div className="input-wrapper">
              <Select
                placeholder="Область"
                data={region}
                name="governorate"
                control={control}
                error={
                  errors?.governorate?.message &&
                  t(errors?.governorate?.message as string)
                }
              />
              <Select
                placeholder="Город/Район"
                data={city}
                name="area"
                control={control}
                error={
                  errors?.area?.message && t(errors?.area?.message as string)
                }
              />
              <MainInput
                placeholder="Махалля, Улица, Дом"
                name="street1"
                register={register("street1")}
                error={
                  errors?.street1?.message &&
                  t(errors.street1.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("street1"),
                }}
              />
              <MainInput
                placeholder="Махалля, Улица, Дом"
                name="street2"
                register={register("street2")}
                error={
                  errors?.street2?.message &&
                  t(errors.street2.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("street2"),
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
              {t("contact")}
            </TextProvider>
            <div className="input-wrapper">
              <MainInput
                placeholder="Почта"
                name="email"
                register={register("email")}
                error={
                  errors?.email?.message && t(errors.email.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("email"),
                }}
              />
              <MainInput
                placeholder="Номер телефона"
                name="phoneNumber"
                register={register("mobile")}
                error={
                  errors?.mobile?.message && t(errors.mobile.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("mobile"),
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
              {t("education")}
            </TextProvider>
            <div className="input-wrapper">
              <Select
                placeholder="Завершенное Учеб. заведение"
                data={purposeBid}
                name="school_type"
                control={control}
                error={
                  errors?.school_type?.message &&
                  t(errors?.school_type?.message as string)
                }
              />
              <MainInput
                placeholder="Номер диплома/аттестата"
                name="diplomNumber"
                register={register("school_document_number")}
                error={
                  errors?.school_document_number?.message &&
                  t(errors.school_document_number.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("school_document_number"),
                }}
              />
            </div>
          </div>
          {/* <div className="part-wrapper">
            <TextProvider
              options={{
                textType: {
                  bold: "bold16|18",
                },
              }}
            >
              {t("appointment")}
            </TextProvider>
            <div className="input-wrapper">
              <Select
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  t(errors?.purposeBid?.message as string)
                }
              />
              <Select
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  t(errors?.purposeBid?.message as string)
                }
              />
              <Select
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  t(errors?.purposeBid?.message as string)
                }
              />
              <Select
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  t(errors?.purposeBid?.message as string)
                }
              />
              <Select
                placeholder="Цель заявки"
                data={purposeBid}
                name="purposeBid"
                control={control}
                error={
                  errors?.purposeBid?.message &&
                  t(errors?.purposeBid?.message as string)
                }
              />
            </div>
          </div> */}
        </div>
        <div className="bid-image-card-wrap">
          <TextProvider
            options={{
              textType: {
                bold: "bold16|18",
              },
            }}
          >
            {t("upload_file")}
          </TextProvider>
          <div className="bid-image-card-content">
            <ImageUpload
              name="photo_3_4"
              onChange={handleImageUpload}
              error={
                errors?.photo_3_4?.message &&
                (errors?.photo_3_4?.message as string)
              }
              titler={{
                title: "Title",
                description: "Description",
              }}
            />
            <ImageUpload
              name="diploma"
              onChange={handleImageUpload}
              titler={{
                title: "Title",
                description: "Description",
              }}
              error={
                errors?.diploma?.message && (errors?.diploma?.message as string)
              }
            />
            <ImageUpload
              name="identity_1"
              onChange={handleImageUpload}
              titler={{
                title: "Title",
                description: "Description",
              }}
              error={
                errors?.identity_1?.message &&
                (errors?.identity_1?.message as string)
              }
            />
            <ImageUpload
              name="identity_2"
              onChange={handleImageUpload}
              titler={{
                title: "Title",
                description: "Description",
              }}
              error={
                errors?.identity_2?.message &&
                (errors?.identity_2?.message as string)
              }
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudentFormPage;
