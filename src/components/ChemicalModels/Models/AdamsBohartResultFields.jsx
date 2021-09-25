import React from "react";
import {COMMON_MODEL_FIELDS, MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {ResultsMathFormula} from "./ResultsMathFormula";

export const AdamsBohartResultFields = ({Kab, N0, R2, equation}) => {
  return (
    <>
      <Field>
        <b>Constate de Adams-Bohart (Kab):</b> {Kab} [{MODEL_UNITS.KAB}]
      </Field>
      <Field>
        <b>Capacidad máxima de adsorción (N₀):</b> {N0} [{MODEL_UNITS.N0}]
      </Field>
      <Field>
        <b>{COMMON_MODEL_FIELDS.R2}:</b> {R2}
      </Field>
      <ResultsMathFormula equation={equation} />
    </>
  );
};
