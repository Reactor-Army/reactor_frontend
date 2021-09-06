import {Button} from "../Button/Button";
import React from "react";
import {BodyContainer, ButtonsContainer, Message} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";

export const ErrorModal = ({closeModal, error}) => {
  return (
    <Modal open={error.message !== null} onClose={closeModal}>
      <BodyContainer>
        <Message>
          Ocurrió un error, por favor revisa los datos ingresados y archivos
          adjuntos:
        </Message>
        <Message>{error.message}</Message>
        <Message>
          El error ocurrió ejecutando el modelo para el archivo número{" "}
          {error.index}.
        </Message>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={closeModal} />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
