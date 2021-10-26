import {Modal} from "../Modal";
import {Button} from "../../Button/Button";
import React from "react";

export const SaveModelResultsModal = ({closeModal, open}) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <Button
        text="Aceptar"
        onClick={() => {
          closeModal();
        }}
      />
    </Modal>
  );
};
