import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React, {useState, useEffect} from "react";
import {appColors, Row} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";
import {ButtonWrapper, ButtonsContainer} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";
import {useHistory} from "react-router-dom";
import {ModelTitle} from "../../../common/ModelTitle";
import {useSelector} from "react-redux";
import {SaveModelResultsModal} from "../../Modals/SaveModelResultsModal/SaveModelResultsModal";
import {searchProcesses} from "../../../services/processes";

export const ModelResults = ({responses, modelType}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
  const [openModal, setOpenModal] = useState(false);
  const [processes, setProcesses] = useState(
    useSelector((state) => state.processes),
  );

  const getProcesses = async () => {
    return await searchProcesses();
  };

  useEffect(() => {
    if (!processes) {
      const apiResponse = getProcesses();
      setProcesses(apiResponse);
    }
  }, [processes]);

  const components = {
    [MODEL_TYPES.THOMAS]: ThomasResults,
    [MODEL_TYPES.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_TYPES.YOON_NELSON]: YoonNelsonResults,
  };
  const history = useHistory();
  const ResultComponent = components[modelType];
  const {loggedIn} = useSelector((state) => state.auth);
  return (
    <>
      <SaveModelResultsModal
        open={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <Row>
        <ModelTitle title={modelType} />
      </Row>
      <ResultComponent responses={responses} colors={colors} />
      <ButtonWrapper>
        {loggedIn && (
          <ButtonsContainer>
            <Button
              size="medium"
              text="Guardar Resultados"
              onClick={() => {
                setOpenModal(true);
              }}
            />
            <Button
              size="medium"
              text="Volver"
              onClick={() => history.goBack()}
            />
          </ButtonsContainer>
        )}
      </ButtonWrapper>
    </>
  );
};
