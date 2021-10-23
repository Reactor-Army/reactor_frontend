import React from "react";
import {useSelector} from "react-redux";
import {Row} from "../../../common/styles";
import {ModelTitle} from "../../../common/ModelTitle";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {MODEL_TYPES} from "../../../common/constants";

export const ModelResultsRoute = () => {
  const modelData = useSelector((state) => state.modelData.models);
  if (!modelData) {
    return null;
  }
  return (
    <>
      <Row>
        <ModelTitle title={"Modelo de Thomas"} />
      </Row>
      <PageLayout>
        <ModelResults responses={modelData} modelType={MODEL_TYPES.THOMAS} />
      </PageLayout>
    </>
  );
};
