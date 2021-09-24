import {ConfirmDeleteModal} from "./ConfirmDeleteModal";
import React from "react";
import {deleteProcess} from "../../services/processes";
import {URLS} from "../../routing/urls";
import {useHistory} from "react-router-dom";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";

export const DeleteProcessModal = ({
  open,
  onClose,
  error,
  setError,
  processId,
}) => {
  const getMessage = () => {
    return "Estás a punto de borrar este sistema. ¿Deseas continuar?";
  };
  const history = useHistory();

  const onDeleteConfirmation = async () => {
    try {
      await deleteProcess(processId);
      displayUpdateMessage();
      history.push(URLS.PROCESSES_LIST);
    } catch (error) {
      setError(error.response.data);
    }
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
