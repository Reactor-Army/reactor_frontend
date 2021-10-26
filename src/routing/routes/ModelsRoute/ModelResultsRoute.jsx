import React from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {Redirect} from "react-router-dom";
import {URLS} from "../../urls";

export const ModelResultsRoute = () => {
  const modelData = useSelector((state) => state.modelData.models);

  if (!modelData.length) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <PageLayout>
      <ModelResults responses={modelData} modelType={modelData[0].modelType} />
    </PageLayout>
  );
};
