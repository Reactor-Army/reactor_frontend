import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React from "react";
import {appColors} from "../../../common/styles";
import {MODEL_TYPES} from "../../../common/constants";
import {ButtonWrapper} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";

export const ModelResults = ({
  inputValues,
  responses,
  onClick,
  modelType,
  buttonText,
}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
  buttonText = buttonText || "Volver a graficar";
  const components = {
    [MODEL_TYPES.THOMAS]: ThomasResults,
    [MODEL_TYPES.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_TYPES.YOON_NELSON]: YoonNelsonResults,
  };
  const ResultComponent = components[modelType];
  return (
    <>
      <ResultComponent
        inputValues={inputValues}
        responses={responses}
        colors={colors}
      />
      <ButtonWrapper>
        <Button size="medium" text={buttonText} onClick={onClick} />
      </ButtonWrapper>
    </>
  );
};
