import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GlobalModal from "../global_modal";
import Modal from "../modal";
import Container from "./style";
import * as yup from "yup";
import {
  SCHEMA_INPUT_EMAIL,
  SCHEMA_INPUT_NUMBER,
  SCHEMA_INPUT_TEXT,
  SELECT_SCHEMA,
} from "@/src/resources/yup";
import DatePicker from "../../datepicker";
import TestInput from "../../../../../input";
import MainButton from "../../buttons/main_button";
import Input from "../../../../../input";
const ExamModal = NiceModal.create(() => {
  const modal = useModal();
  const onCloseClick = () => {
    modal.remove();
  };

  const yupValidation = yup.object({
    amountPayable: SCHEMA_INPUT_NUMBER,
    checkNumber: SCHEMA_INPUT_NUMBER,
    comment: SCHEMA_INPUT_TEXT,
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

  return (
    <Modal isModal={modal.visible}>
      <GlobalModal title="Добавить экзамен" onCloseClick={onCloseClick}>
        <Container onSubmit={(e) => e.preventDefault()}>
          <DatePicker
            name="Datepicker"
            control={control}
            placeholder="Дата платежа"
          />
          <div className="check-wrap">
            <Input
              name="amountPayable"
              placeholder="Сумма к оплате"
              register={register("amountPayable")}
              error={
                errors?.amountPayable?.message &&
                (errors?.amountPayable?.message as string)
              }
            />
            <Input
              name="checkNumber"
              placeholder="Номер чека"
              type="number"
              register={register("checkNumber")}
              error={
                errors?.checkNumber?.message &&
                (errors?.checkNumber?.message as string)
              }
            />
          </div>
          <Input
            name="comment"
            placeholder="Комментарий"
            type="text"
            register={register("comment")}
            error={
              errors?.comment?.message && (errors?.comment?.message as string)
            }
          />
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

export default ExamModal;
