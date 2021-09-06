import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";

export const ThomasResultFields = ({kth, q0}) => {
  return (
    <>
      <Field>
        <b>Constante de Thomas (Kth):</b> {kth} [{MODEL_UNITS.KTH}]
      </Field>
      <Field>
        <b>Concentración máxima soluto (q0):</b> {q0} [{MODEL_UNITS.Q0}]
      </Field>
    </>
  );
};
