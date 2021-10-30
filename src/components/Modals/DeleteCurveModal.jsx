import {ConfirmDeleteModal} from "./ConfirmDeleteModal";
import React, {useState} from "react";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../Form/FormErrorModal";
import {deleteModel} from "../../services/models";

export const DeleteCurveModal = ({open, onClose, curveData}) => {
  const message = `Estás a punto de borrar a la curva ${curveData.nombre} del sistema. ¿Deseas continuar?"`;
  const [deleteError, setDeleteError] = useState(null);

  const onDeleteConfirmation = async () => {
    const result = await deleteModel(curveData.id);
    if (result.status) {
      setDeleteError(result.response);
    } else {
      displayUpdateMessage();
      window.location.reload();
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
        message={message}
        onDeleteConfirmation={onDeleteConfirmation}
      />
    </>
  );
};
