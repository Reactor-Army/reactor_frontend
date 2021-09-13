import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {THOMAS_FIELDS} from "../../../common/fields";

export const ThomasInputFields = ({F, C0, W}) => {
  return (
    <>
      <Field>
        <b>{THOMAS_FIELDS.FLOW}:</b> {F} [{MODEL_UNITS.FLOW}]
      </Field>
      <Field>
        <b>{THOMAS_FIELDS.INITIAL_CONCENTRATION}:</b> {C0} [
        {MODEL_UNITS.INITIAL_CONCENTRATION}]
      </Field>
      <Field>
        <b>{THOMAS_FIELDS.ADSORBENT_MASS}:</b> {W} [{MODEL_UNITS.ADSORBENT_MASS}
        ]
      </Field>
    </>
  );
};
