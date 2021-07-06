import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useAsync} from "../../../customHooks/useAsync";
import {ConfirmDeleteModal} from "../ConfirmDeleteModal";

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
  const history = useHistory();

  const getProcessesCount = async () => {
    try {
      const result = await processCountGetter(itemToDelete.id);
      setProcessCount(result.cantidadProcesos);
    } catch (e) {
      setError(e.response.data);
    }
  };

  const onDeleteConfirmation = async () => {
    try {
      await deleteFunction(itemToDelete.id);
      history.push(successRedirectURL);
    } catch (e) {
      setError(
        `Ocurrió un error al intentar ejecutar la operación: ${e.response.data.message}`,
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
