import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {Redirect, useParams} from "react-router-dom";
import {URLS} from "../../urls";
import {getModelData} from "../../../services/models";
import CircularProgress from "@material-ui/core/CircularProgress";
import {errorCodes} from "../../../utils/errorStatusCodes";
import {modelResultToComponent} from "../../../utils/modelResultsToComponentFormat";

export const ModelResultsRoute = () => {
  let {id} = useParams();
  const [getReturned404, setGetReturned404] = useState(false);
  const storeModelData = useSelector((state) => state.modelData.models);
  const [modelData, setModelData] = useState(null);

  useEffect(async () => {
    if (!id) {
      return;
    }
    const data = await getModelData(id);
    if (data && errorCodes.includes(data.status)) {
      setGetReturned404(true);
      return;
    }
    setModelData(modelResultToComponent(data));
  }, [id]);

  useEffect(() => {
    if (!storeModelData.length) {
      return;
    }
    setModelData(storeModelData);
  }, [storeModelData]);

  if (getReturned404 && !storeModelData.length) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }

  if (!modelData) {
    return <CircularProgress />;
  }
  return (
    <PageLayout>
      <ModelResults responses={modelData} modelType={modelData[0].modelType} />
    </PageLayout>
  );
};
