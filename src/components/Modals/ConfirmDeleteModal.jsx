import {Modal} from "./Modal";
import {
  BodyContainer,
  ButtonsContainer,
  Message,
  Warning,
} from "./DeleteAdsorbateOrAdsorbentModal/DeleteAdsorbateOrAdsorbentModalStyles";
import {Button} from "../Button/Button";
import React from "react";

export const ConfirmDeleteModal = ({
  closeModal,
  message,
  error,
  setError,
  onDeleteConfirmation,
  open,
}) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <BodyContainer>
        {!error ? (
          <>
            <Message>{message}</Message>
            <Warning>
              Una vez realizada, esta operación no se puede deshacer.
            </Warning>
            <ButtonsContainer>
              <Button text={"Borrar"} onClick={onDeleteConfirmation} />
              <Button text={"Cancelar"} onClick={close} />
            </ButtonsContainer>
          </>
        ) : (
          <>
            <Message>{error}</Message>
            <ButtonsContainer>
              <Button
                text={"Aceptar"}
                onClick={() => {
                  setError(null);
                  closeModal();
                }}
              />
            </ButtonsContainer>
          </>
        )}
      </BodyContainer>
    </Modal>
  );
};
