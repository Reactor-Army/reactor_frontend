import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";

export const YoonNelsonResultFields = ({Kyn, t}) => {
  return (
    <>
      <Field>
        <b>Constate de Yoon-Nelson (Kyn):</b> {Kyn} [{MODEL_UNITS.KYN}]
      </Field>
      <Field>
        <b>Tiempo requerido para retener el 50% de la C0 (τ):</b> {t} [
        {MODEL_UNITS.t}]
      </Field>
    </>
  );
};