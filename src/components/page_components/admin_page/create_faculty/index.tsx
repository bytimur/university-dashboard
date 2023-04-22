import * as yup from "yup";
import Header from "@/src/components/global/header";
import MainInput from "@/src/components/global/main_input";
import { SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import { useForm } from "react-hook-form";
import Container from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import TextProvider from "@/src/components/global/providers/text_provider";
import DirectionCard from "@/src/components/global/direction_card";
import IconProvider from "@/src/components/global/providers/icon_provider";
import { useRouter } from "next/router";

const CreateFacultyPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const yupValidation = yup.object({
    facultyName: SCHEMA_INPUT_TEXT,
    facultyNumber: SCHEMA_INPUT_TEXT,
    facultyDescription: SCHEMA_INPUT_TEXT,
  });

  const {
    register,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidation),
    mode: "onBlur",
  });

  return (
    <Container>
      <Header
        buttons={{
          rightButton: {
            title: "Сохранить",
            icon: "FlashIcon",
            type: "fill",
            onClick: () => "click",
          },
        }}
        backButton={router.back}
        titler={{
          title: "Новый факультет",
          description: "Прием за 2023-2024",
        }}
      />
      <div className="create-faculty-content-wrap">
        <form action="" className="form-wrap">
          <TextProvider
            options={{
              textType: {
                medium: "medium14|16",
              },
              color: "second_text",
            }}
          >
            Информация
          </TextProvider>
          <MainInput
            placeholder="Название факультета"
            name="facultyName"
            register={register("facultyName")}
            error={
              errors?.facultyName?.message &&
              t(errors.facultyName.message as string)
            }
            options={{
              disabled: false,
              setFocus: () => setFocus("facultyName"),
            }}
          />
          <MainInput
            placeholder="Номер факультета"
            name="facultyNumber"
            register={register("facultyNumber")}
            error={
              errors?.facultyNumber?.message &&
              t(errors.facultyNumber.message as string)
            }
            options={{
              disabled: false,
              setFocus: () => setFocus("facultyNumber"),
            }}
          />
          <MainInput
            placeholder="Описание"
            name="facultyDescription"
            register={register("facultyDescription")}
            error={
              errors?.facultyDescription?.message &&
              t(errors.facultyDescription.message as string)
            }
            options={{
              disabled: false,
              setFocus: () => setFocus("facultyDescription"),
            }}
          />
        </form>
        <div className="faculty-card-wrap">
          <div className="faculty-card-header">
            <TextProvider
              options={{
                textType: {
                  bold: "bold24|32",
                },
              }}
            >
              Направления
            </TextProvider>
            <button className="add-button">
              <IconProvider icon="AddSquareIcon" color="static_primary_solid" />
              <TextProvider
                options={{
                  textType: {
                    medium: "medium16|18",
                  },
                  color: "static_primary_solid",
                }}
              >
                Добавить
              </TextProvider>
            </button>
          </div>
          <div className="card-content">
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
            <DirectionCard
              titler={{
                button: {
                  title: "932093 - Мультимедийные технологии",
                  onClick: () => "click",
                },
                onCloseClick: () => "click",
              }}
              content={[
                {
                  id: 0,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Информация",
                  directionInfo: [
                    {
                      id: 1,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 2,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                    {
                      id: 3,
                      title: "Название",
                      description: "Мультимедийные технологии",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateFacultyPage;
