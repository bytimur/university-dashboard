import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GlobalModal from "../global_modal";
import Modal from "../modal";
import Container from "./style";
import * as yup from "yup";
import { SCHEMA_INPUT_TEXT, SELECT_SCHEMA } from "@/src/resources/yup";
import MainButton from "../../buttons/main_button";
import Select from "../../select";
import TextProvider from "../../providers/text_provider";
import InputDate from "../../input_date";
import MainInput from "../../main_input";

const CreateExamModal = NiceModal.create(() => {
  const modal = useModal();
  const onCloseClick = () => {
    modal.remove();
  };

  const yupValidation = yup.object({
    faculty: SELECT_SCHEMA,
    direction: SELECT_SCHEMA,
    stage: SELECT_SCHEMA,
    form: SELECT_SCHEMA,
    examDay: SCHEMA_INPUT_TEXT,
    region: SELECT_SCHEMA,
    street: SELECT_SCHEMA,
    address: SCHEMA_INPUT_TEXT,
    place: SCHEMA_INPUT_TEXT,
  });

  const {
    register,
    handleSubmit,
    control,
    setFocus,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(yupValidation),
  });
  console.log(isValid);

  const onSubmit = (data: any) => console.log(data);

  const yearData = [
    { id: 0, value: 1, label: "2022-2023" },
    { id: 1, value: 2, label: "2023-2024" },
    { id: 1, value: 2, label: "2025-2026" },
    { id: 1, value: 2, label: "2027-2028" },
  ];
  const formData = [
    { id: 0, value: 1, label: "Очное" },
    { id: 1, value: 2, label: "Заочное" },
  ];
  const faculty = [
    { id: 0, value: 1, label: "Компьютерная инженерия" },
    { id: 1, value: 2, label: "Компьютерная инженерия" },
  ];
  const stage = [
    { id: 0, value: 1, label: "Бакалавриат" },
    { id: 1, value: 2, label: "Магистратура" },
  ];
  const language = [
    { id: 0, value: 1, label: "Русский" },
    { id: 1, value: 2, label: "Узбекский" },
    { id: 1, value: 2, label: "Английсикий" },
  ];
  const direction = [
    { id: 0, value: 1, label: "Управление и экономика специальностей" },
    { id: 1, value: 2, label: "Гуманитарные и социальные науки" },
    { id: 1, value: 2, label: "медиа, дизайн и архитектура специальности" },
  ];

  return (
    <Modal isModal={modal.visible}>
      <GlobalModal title="Добавить экзамен" onCloseClick={onCloseClick}>
        <Container onSubmit={(e) => e.preventDefault()}>
          <div className="input-content-wrap">
            <TextProvider
              options={{
                textType: {
                  medium: "medium14|16",
                },
                color: "second_text",
              }}
            >
              Направление/тип экзамена
            </TextProvider>
            <div className="check-wrap">
              <Select
                placeholder="Факультет"
                data={faculty}
                name="year"
                control={control}
                error={
                  errors?.faculty?.message &&
                  (errors?.faculty?.message as string)
                }
              />
              <Select
                placeholder="Направление"
                data={stage}
                name="direction"
                control={control}
                error={
                  errors?.direction?.message &&
                  (errors?.direction?.message as string)
                }
              />
              <Select
                placeholder="Этап"
                data={stage}
                name="stage"
                control={control}
                error={
                  errors?.stage?.message && (errors?.stage?.message as string)
                }
              />
              <Select
                placeholder="Форма"
                data={language}
                name="language"
                control={control}
                error={
                  errors?.form?.message && (errors?.form?.message as string)
                }
              />
            </div>
          </div>
          <div className="input-content-wrap">
            <TextProvider
              options={{
                textType: {
                  medium: "medium14|16",
                },
                color: "second_text",
              }}
            >
              Детали
            </TextProvider>
            <div className="check-wrap">
              <InputDate
                placeholder="Экзаменационный день"
                name="date"
                register={register("examDay")}
                error={
                  errors?.examDay?.message && (errors.examDay.message as string)
                }
              />
              <Select
                placeholder="Направление"
                data={stage}
                name="direction"
                control={control}
                error={
                  errors?.direction?.message &&
                  (errors?.direction?.message as string)
                }
              />
              <Select
                placeholder="Область"
                data={stage}
                name="stage"
                control={control}
                error={
                  errors?.region?.message && (errors?.region?.message as string)
                }
              />
              <Select
                placeholder="Район"
                data={language}
                name="language"
                control={control}
                error={
                  errors?.street?.message && (errors?.street?.message as string)
                }
              />
              <MainInput
                placeholder="Адрес"
                name="address"
                register={register("address")}
                error={
                  errors?.address?.message && (errors.address.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("address"),
                }}
              />
              <MainInput
                placeholder="Место"
                name="place"
                register={register("place")}
                error={
                  errors?.place?.message && (errors.place.message as string)
                }
                options={{
                  disabled: false,
                  setFocus: () => setFocus("place"),
                }}
              />
            </div>
          </div>
          <div className="button-wrap">
            <MainButton
              onClick={handleSubmit(onSubmit)}
              type="submit"
              options={{
                type: "fill",
                width: 200,
              }}
              title="Cохранить"
            />
          </div>
        </Container>
      </GlobalModal>
    </Modal>
  );
});

export default CreateExamModal;
