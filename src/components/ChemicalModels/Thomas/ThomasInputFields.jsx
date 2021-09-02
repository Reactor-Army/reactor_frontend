import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {THOMAS_FIELDS} from "../../../common/fields";

export const ThomasInputFields = ({kth, q0}) => {
  return (
    <>
      <Field>
        <b>{THOMAS_FIELDS.FLOW}:</b> {kth} [{MODEL_UNITS.FLOW}]
      </Field>
      <Field>
        <b>{THOMAS_FIELDS.INITIAL_CONCENTRATION}:</b> {kth} [
        {MODEL_UNITS.INITIAL_CONCENTRATION}]
      </Field>
      <Field>
        <b>{THOMAS_FIELDS.ADSORBENT_MASS}:</b> {q0} [
        {MODEL_UNITS.ADSORBENT_MASS}]
      </Field>
    </>
  );
};
