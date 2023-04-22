import * as yup from "yup";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GlobalModal from "../global_modal";
import Modal from "../modal";
import Container from "./style";
import { SCHEMA_INPUT_NUMBER, SCHEMA_INPUT_TEXT } from "@/src/resources/yup";
import MainButton from "../../buttons/main_button";

const CauseModal = NiceModal.create(() => {
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
      <GlobalModal title="Причина" onCloseClick={onCloseClick}>
        <Container onSubmit={(e) => e.preventDefault()}>
          <div className="button-wrap">
            <MainButton
              onClick={handleSubmit(onSubmit)}
              type="submit"
              options={{
                type: "fill",
                width: 200,
              }}
              title="Отправка"
            />
          </div>
        </Container>
      </GlobalModal>
    </Modal>
  );
});

export default CauseModal;
