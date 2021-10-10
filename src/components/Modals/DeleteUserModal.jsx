import {ConfirmDeleteModal} from "./ConfirmDeleteModal";
import React, {useState} from "react";
import {displayUpdateMessage} from "../../utils/displayUpdateMessage";
import {FormErrorModal} from "../Form/FormErrorModal";
import {deleteUser} from "../../services/users";

export const DeleteUserModal = ({open, onClose, error, setError, userData}) => {
  const message = `Estás a punto de borrar al usuario ${userData.email} del sistema. ¿Deseas continuar?"`;
  const [deleteError, setDeleteError] = useState(null);

  const onDeleteConfirmation = async () => {
    try {
      const result = await deleteUser(userData.id);
      if (result.status) {
        setDeleteError(result.response);
      } else {
        displayUpdateMessage();
        window.location.reload();
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
        message={message}
        onDeleteConfirmation={onDeleteConfirmation}
      />
    </>
  );
};
