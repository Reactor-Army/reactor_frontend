import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React from "react";
import {appColors} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";

export const ModelResults = ({inputValues, responses, onClick, modelType}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];

  const components = {
    [MODEL_TYPES.THOMAS]: ThomasResults,
    [MODEL_TYPES.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_TYPES.YOON_NELSON]: YoonNelsonResults,
  };
  const ResultComponent = components[modelType];
  return (
    <ResultComponent
      inputValues={inputValues}
      responses={responses}
      onClick={onClick}
      colors={colors}
    />
  );
};
