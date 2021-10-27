import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {Redirect, useParams} from "react-router-dom";
import {URLS} from "../../urls";
import {getModelData} from "../../../services/models";
import CircularProgress from "@material-ui/core/CircularProgress";

export const ModelResultsRoute = () => {
  let {id} = useParams();
  const [getReturned404, setGetReturned404] = useState(false);
  const storeModelData = useSelector((state) => state.modelData.models);
  const [modelData, setModelData] = useState(null);

  useEffect(async () => {
    const data = await getModelData(id);
    if (data.status === 400 || data.status === 404) {
      setGetReturned404(true);
      return;
    }
    //{
    //     "F": 1,
    //     "W": 3,
    //     "C0": 2,
    //     "Kth": 99.80361,
    //     "q0": 0.04544,
    //     "R2": 0.99484,
    //     "points": []
    //
    //     "modelType": "Modelo de Thomas"
    // }
    console.log(data);
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
