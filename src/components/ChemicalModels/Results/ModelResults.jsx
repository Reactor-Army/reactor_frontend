import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React from "react";
import {appColors, Row} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";
import {ButtonWrapper, ButtonsContainer} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";
import {useHistory} from "react-router-dom";
import {ModelTitle} from "../../../common/ModelTitle";
import {useSelector} from "react-redux";

export const ModelResults = ({responses, modelType}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
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
              onClick={() => {}}
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
