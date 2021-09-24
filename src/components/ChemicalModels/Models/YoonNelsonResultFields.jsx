import React from "react";
import {COMMON_MODEL_FIELDS, MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";

// eslint-disable-next-line id-length
export const YoonNelsonResultFields = ({Kyn, t, R2}) => {
  return (
    <>
      <Field>
        <b>Constate de Yoon-Nelson (Kyn):</b> {Kyn} [{MODEL_UNITS.KYN}]
      </Field>
      <Field>
        <b>Tiempo requerido para retener el 50% de la C0 (τ):</b> {t} [
        {MODEL_UNITS.FIFTY_PERCENT_TIME}]
      </Field>
      <Field>
        <b>{COMMON_MODEL_FIELDS.R2}:</b> {R2}
      </Field>
    </>
  );
};
