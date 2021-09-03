import {Button} from "../Button/Button";
import React from "react";
import {BodyContainer, ButtonsContainer, Message} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";

export const ErrorModal = ({closeModal, error}) => {
  return (
    <Modal open={error.message !== null} onClose={closeModal}>
      <BodyContainer>
        <Message>
          Ocurrió un error ejecutando el modelo número {error.index}:
        </Message>
        <Message>{error.message}</Message>
        <Message>
          Por favor, revisar el archivo ingresado y/o los parámetros de entrada.
        </Message>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={closeModal} />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
