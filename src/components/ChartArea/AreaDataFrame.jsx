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
          <b>Cantidad adsorbida (Resta de areas):</b> {results.reactorQ}{" "}
          {UNITS.MASS}
        </Field>
      </DataFrameContent>
    </DataFrame>
  );
};
