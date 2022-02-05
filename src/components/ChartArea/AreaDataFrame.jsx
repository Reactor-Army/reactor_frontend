import {
  DataFrame,
  DataFrameContent,
} from "../ChemicalModels/Models/ModelsStyles";
import {Field} from "../ChemicalModels/ChemicalModelStyles";
import React from "react";
import {UNITS} from "../../common/fields";

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
          <b>Resta de áreas:</b> {results.reactorQ}
        </Field>
        <Field>
          <b>Cantidad adsorbida:</b> {results.contaminanteAdsorbido}{" "}
          {UNITS.MASS}
        </Field>
      </DataFrameContent>
    </DataFrame>
  );
};
