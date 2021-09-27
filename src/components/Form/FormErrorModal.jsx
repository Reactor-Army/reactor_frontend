import {Button} from "../Button/Button";
import React from "react";
import {BodyContainer, ButtonsContainer, Message} from "../Modals/ModalStyles";
import {Modal} from "../Modals/Modal";

export const FormErrorModal = ({errorInfo, onClose}) => {
  return (
    <Modal open={errorInfo} onClose={onClose}>
      <BodyContainer>
        <Message>
          Ocurrio un error al intentar realizar la operacion: <br /> {errorInfo}
        </Message>
        <ButtonsContainer>
          <Button text={"Cerrar"} onClick={onClose} />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
