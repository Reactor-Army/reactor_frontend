import {ConfirmDeleteModal} from "./ConfirmDeleteModal";
import React from "react";

export const DeleteProcessModal = ({open, onClose, error, setError}) => {
  const getMessage = () => {
    return "Estás a punto de borrar este sistema. ¿Deseas continuar?";
  };

  const onDeleteConfirmation = () => {
    console.log("Se borró nomas");
  };
  return (
    <ConfirmDeleteModal
      open={open}
      closeModal={onClose}
      error={error}
      setError={setError}
      message={getMessage()}
      onDeleteConfirmation={onDeleteConfirmation}
    />
  );
};
