import {ThomasResults} from "./ThomasResults";
import {AdamsBohartResults} from "./AdamsBohartResults";
import {YoonNelsonResults} from "./YoonNelsonResults";
import React from "react";
import {appColors} from "../../../common/styles";
import {MODEL_ALIAS} from "../../../common/constants";
import {ButtonWrapper} from "../Models/ModelsStyles";
import {Button} from "../../Button/Button";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export const ModelResults = ({responses, modelType}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
  const components = {
    [MODEL_ALIAS.THOMAS]: ThomasResults,
    [MODEL_ALIAS.ADAMS_BOHART]: AdamsBohartResults,
    [MODEL_ALIAS.YOON_NELSON]: YoonNelsonResults,
  };
  const history = useHistory();
  const ResultComponent = components[modelType];
  const {loggedIn} = useSelector((state) => state.auth);

  return (
    <>
      <ResultComponent responses={responses} colors={colors} />
      <ButtonWrapper>
        {loggedIn && (
          <Button
            size="medium"
            text={"Volver"}
            onClick={() => history.goBack()}
          />
        )}
      </ButtonWrapper>
    </>
  );
};
