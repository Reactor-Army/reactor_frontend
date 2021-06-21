import React, {useState, useEffect} from "react";
import {Modal} from "../Modal";
import {Button} from "../../Button/Button";
import {
  Message,
  Warning,
  BodyContainer,
  ButtonsContainer,
} from "./DeleteAdsorbateModalStyles";
import {
  getAdsorbateProcessCount,
  deleteAdsorbate,
} from "../../../services/adsorbates";
import {URLS} from "../../../routing/urls";
import {useHistory} from "react-router-dom";

export const DeleteAdsorbateModal = ({open, onClose, adsorbate}) => {
  const [processCount, setProcessCount] = useState(0);
  const [error, setError] = useState();
  const history = useHistory();

  const getProcessesCount = async () => {
    try {
      const result = await getAdsorbateProcessCount(adsorbate.id);
      setProcessCount(result.cantidadProcesos);
    } catch (e) {
      setError(e.response.data);
    }
  };

  const onDeleteConfirmation = async () => {
    try {
      await deleteAdsorbate(adsorbate.id);
      history.push(URLS.ADSORBATES_LIST);
    } catch (e) {
      setError(
        `Ocurrio un error al intentar ejecutar la operacion: ${e.response.data.message}`,
      );
    }
  };

  useEffect(() => {
    getProcessesCount();
  }, []);

  return (
    <Modal open={open}>
      <BodyContainer>
        {!error ? (
          <>
            <Message>{`Al borrar este adsorbato tambien se borraran ${processCount} 
      procesos asociados. ¿Deseas continuar?`}</Message>
            <Warning>
              Una vez realizada, esta operacion no se puede deshacer.
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
