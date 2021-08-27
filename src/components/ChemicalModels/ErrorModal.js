import {Button} from "../Button/Button";
import React from "react";
import {BodyContainer, ButtonsContainer, Message} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";

export const ErrorModal = ({closeModal, error}) => {
  return (
    <Modal open={error !== null} onClose={closeModal}>
      <BodyContainer>
        <Message>Ocurrió un error ejecutando el modelo:</Message>
        <Message>{error}</Message>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={closeModal} />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
