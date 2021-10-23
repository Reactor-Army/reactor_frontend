import React from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";

export const ModelResultsRoute = () => {
  const modelData = useSelector((state) => state.modelData.models);
  if (!modelData) {
    return null;
  }
  return (
    <PageLayout>
      <ModelResults responses={modelData} modelType={modelData[0].modelType} />
    </PageLayout>
  );
};
