import React from "react";
import {Modal} from "../Modal";
import {Button} from "../../Button/Button";
import {
  Message,
  Warning,
  BodyContainer,
  ButtonsContainer,
} from "./DeleteAdsorbateModalStyles";

export const DeleteAdsorbateModal = ({open, onClose, associatedProcesses}) => {
  return (
    <Modal open={open}>
      <BodyContainer>
        <Message>
          Al borrar este adsorbato tambien se borraran {associatedProcesses}
          procesos asociados. ¿Deseas continuar?
        </Message>
        <Warning>
          Una vez realizada, esta operacion no se puede deshacer.
        </Warning>
        <ButtonsContainer>
          <Button
            text={"Borrar"}
            onClick={() => {
              console.log("Borrar");
            }}
          />
          <Button
            text={"Cancelar"}
            onClick={() => {
              onClose();
            }}
          />
        </ButtonsContainer>
      </BodyContainer>
    </Modal>
  );
};
