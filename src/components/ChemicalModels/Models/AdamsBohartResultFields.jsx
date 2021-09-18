import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";

export const AdamsBohartResultFields = ({Kab, N0}) => {
  return (
    <>
      <Field>
        <b>Constate de Adams-Bohart (Kab):</b> {Kab} [{MODEL_UNITS.KAB}]
      </Field>
      <Field>
        <b>Capacidad máxima de adsorción (N₀):</b> {N0} [{MODEL_UNITS.N0}]
      </Field>
    </>
  );
};
