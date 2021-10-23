import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React from "react";
import {appColors} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";
import {ButtonWrapper} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";
import {useHistory} from "react-router-dom";

export const ModelResults = ({inputValues, responses, modelType}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
  const components = {
    [MODEL_TYPES.THOMAS]: ThomasResults,
    [MODEL_TYPES.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_TYPES.YOON_NELSON]: YoonNelsonResults,
  };
  const history = useHistory();
  const ResultComponent = components[modelType];
  return (
    <>
      <ResultComponent
        inputValues={inputValues}
        responses={responses}
        colors={colors}
      />
      <ButtonWrapper>
        <Button
          size="medium"
          text={"Volver"}
          onClick={() => history.goBack()}
        />
      </ButtonWrapper>
    </>
  );
};
