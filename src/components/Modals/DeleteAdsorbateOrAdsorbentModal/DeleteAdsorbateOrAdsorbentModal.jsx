import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useAsync} from "../../../customHooks/useAsync";
import {ConfirmDeleteModal} from "../ConfirmDeleteModal";
import {displayUpdateMessage} from "../../../utils/displayUpdateMessage";
import {FormErrorModal} from "../../Form/FormErrorModal";

export const DeleteAdsorbateOrAdsorbentModal = ({
  open,
  onClose,
  itemToDelete,
  typeOfItemDeleted,
  processCountGetter,
  deleteFunction,
  successRedirectURL,
}) => {
  const [processCount, setProcessCount] = useState(0);
  const [error, setError] = useState();
  const [deleteError, setDeleteError] = useState(null);
  const history = useHistory();

  const getProcessesCount = async () => {
    try {
      const result = await processCountGetter(itemToDelete.id);
      setProcessCount(result.cantidadProcesos);
    } catch (error) {
      setError(error.response.data);
    }
  };

  const onDeleteConfirmation = async () => {
    try {
      const result = await deleteFunction(itemToDelete.id);
      if (result.status) {
        setDeleteError(result.response);
      } else {
        displayUpdateMessage();
        history.push(successRedirectURL);
      }
    } catch (error) {
      setError(
        `Ocurrió un error al intentar ejecutar la operación: ${error.response.data.message}`,
      );
    }
  };

  const getMessage = () => {
    if (processCount) {
      return `Al borrar este ${typeOfItemDeleted} también se borrarán ${processCount} 
      sistema${processCount === 1 ? "" : "s"} asociado${
        processCount === 1 ? "" : "s"
      }. ¿Deseas continuar?`;
    }
    return `Estás a punto de borrar este ${typeOfItemDeleted}. ¿Deseas continuar?`;
  };

  useAsync(() => {
    getProcessesCount();
  }, [error]);

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
