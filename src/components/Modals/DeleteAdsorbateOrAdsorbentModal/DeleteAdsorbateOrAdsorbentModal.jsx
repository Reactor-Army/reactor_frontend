import React, {useState, useEffect} from "react";
import {Modal} from "../Modal";
import {Button} from "../../Button/Button";
import {
  Message,
  Warning,
  BodyContainer,
  ButtonsContainer,
} from "./DeleteAdsorbateOrAdsorbentModalStyles";

import {useHistory} from "react-router-dom";

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
      procesos asociados. ¿Deseas continuar?`;
    }
    return `Estás a punto de borrar este ${typeOfItemDeleted}. ¿Deseas continuar?`;
  };

  useEffect(() => {
    getProcessesCount();
  }, [error]);

  return (
    <Modal open={open} onClose={onClose}>
      <BodyContainer>
        {!error ? (
          <>
            <Message>{getMessage()}</Message>
            <Warning>
              Una vez realizada, esta operación no se puede deshacer.
            </Warning>
            <ButtonsContainer>
              <Button
                text={"Borrar"}
                onClick={() => {
                  onDeleteConfirmation();
                }}
              />
              <Button
                text={"Cancelar"}
                onClick={() => {
                  onClose();
                }}
              />
            </ButtonsContainer>
          </>
        ) : (
          <>
            <Message>{error}</Message>
            <ButtonsContainer>
              <Button
                text={"Aceptar"}
                onClick={() => {
                  setError();
                  onClose();
                }}
              />
            </ButtonsContainer>
          </>
        )}
      </BodyContainer>
    </Modal>
  );
};
