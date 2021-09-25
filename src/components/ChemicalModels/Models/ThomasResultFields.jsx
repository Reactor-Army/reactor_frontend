import React from "react";
import {COMMON_MODEL_FIELDS, MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {ResultsMathFormula} from "./ResultsMathFormula";

export const ThomasResultFields = ({kth, q0, R2, equation}) => {
  return (
    <>
      <Field>
        <b>Constante de Thomas (Kth):</b> {kth} [{MODEL_UNITS.KTH}]
      </Field>
      <Field>
        <b>Concentración máxima soluto (q0):</b> {q0} [{MODEL_UNITS.Q0}]
      </Field>
      <Field>
        <b>{COMMON_MODEL_FIELDS.R2}:</b> {R2}
      </Field>
      <ResultsMathFormula equation={equation} />
    </>
  );
};
