import {ConfirmDeleteModal} from "./ConfirmDeleteModal";
import React, {useState} from "react";
import {deleteProcess} from "../../services/processes";
import {URLS} from "../../routing/urls";
import {useHistory} from "react-router-dom";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../Form/FormErrorModal";

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
  const [deleteError, setDeleteError] = useState(null);

  const onDeleteConfirmation = async () => {
    try {
      const result = await deleteProcess(processId);
      if (result.status) {
        setDeleteError(result.response);
      } else {
        displayUpdateMessage();
        history.push(URLS.PROCESSES_LIST);
      }
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <>
      <FormErrorModal
        errorInfo={deleteError && deleteError.message}
        onClose={() => setDeleteError(null)}
      />
      <ConfirmDeleteModal
        open={open}
        closeModal={onClose}
        error={error}
        setError={setError}
        message={getMessage()}
        onDeleteConfirmation={onDeleteConfirmation}
      />
    </>
  );
};
