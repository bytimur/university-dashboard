import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GlobalModal from "../global_modal";
import Modal from "../modal";
import Container from "./style";
import * as yup from "yup";
import { SELECT_SCHEMA } from "@/src/resources/yup";
import MainButton from "../../buttons/main_button";
import Select from "../../select";

const BidModal = NiceModal.create(() => {
  const modal = useModal();
  const onCloseClick = () => {
    modal.remove();
  };

  const yupValidation = yup.object({
    year: SELECT_SCHEMA,
    form: SELECT_SCHEMA,
    faculty: SELECT_SCHEMA,
    stage: SELECT_SCHEMA,
    language: SELECT_SCHEMA,
    direction: SELECT_SCHEMA,
  });

  const {
    register,
    handleSubmit,
    control,
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
          <div className="check-wrap">
            <Select
              placeholder="Год"
              data={yearData}
              name="year"
              control={control}
              error={errors?.year?.message && (errors?.year?.message as string)}
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
              data={formData}
              name="form"
              control={control}
              error={errors?.form?.message && (errors?.form?.message as string)}
            />
            <Select
              placeholder="Язык"
              data={language}
              name="language"
              control={control}
              error={
                errors?.language?.message &&
                (errors?.language?.message as string)
              }
            />
            <Select
              placeholder="Факультет"
              data={faculty}
              name="faculty"
              control={control}
              error={
                errors?.faculty?.message && (errors?.faculty?.message as string)
              }
            />
            <Select
              placeholder="Направление"
              data={direction}
              name="direction"
              control={control}
              error={
                errors?.direction?.message &&
                (errors?.direction?.message as string)
              }
            />
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

export default BidModal;
