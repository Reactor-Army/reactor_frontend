import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {Redirect, useParams} from "react-router-dom";
import {URLS} from "../../urls";
import {getModelData} from "../../../services/models";
import CircularProgress from "@material-ui/core/CircularProgress";
import {errorCodes} from "../../../utils/errorStatusCodes";

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

  if (getReturned404 && !storeModelData.lenght) {
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

const modelResultToComponent = (data) => {
  // Básicamente mapear la response del backend a lo esperado por nuestros
  // Components
  return [
    {
      // eslint-disable-next-line id-length
      F: data.request.caudalVolumetrico,
      // eslint-disable-next-line id-length
      W: data.request.sorbenteReactor,
      C0: data.request.concentracionInicial,
      Kth: data.response.constanteThomas,
      q0: data.response.concentracionMaximaSoluto,
      points: data.response.observaciones.map((observation) => [
        observation.x,
        observation.y,
      ]),
      Kyn: data.response.constanteYoonNelson,
      // eslint-disable-next-line id-length
      t: data.response.tiempoCincuentaPorciento,
      U0: data.request.velocidadLineal,
      // eslint-disable-next-line id-length
      Z: data.request.alturaLechoReactor,
      Kab: data.response.constanteAdamsBohart,
      N0: data.response.capacidadMaximaAbsorcion,
      modelType: data.modelo.modelo,
      modelName: data.modelo.nombreVerbose,
    },
  ];
};
