import {
  DataFrame,
  DataFrameContent,
} from "../ChemicalModels/Models/ModelsStyles";
import {Field} from "../ChemicalModels/ChemicalModelStyles";
import React from "react";

export const AreaDataFrame = ({results}) => {
  return (
    <DataFrame>
      <DataFrameContent>
        <Field>
          <b>Área de la curva:</b> {results.areaCurva}
        </Field>
        <Field>
          <b>Área de la línea base:</b> {results.areaLineaBase}
        </Field>
        <Field>
          <b>Capacidad máxima de adsorción (q):</b> {results.reactorQ}
        </Field>
        <Field>
          <b>Contaminante Adsorbido (mmol):</b> {results.contaminanteAdsorbido}
        </Field>
      </DataFrameContent>
    </DataFrame>
  );
};
