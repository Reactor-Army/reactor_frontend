import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {COMMON_MODEL_FIELDS} from "../../../common/fields";

export const YoonNelsonInputFields = ({F}) => {
  return (
    <Field>
      <b>{COMMON_MODEL_FIELDS.FLOW}:</b> {F} [{MODEL_UNITS.FLOW}]
    </Field>
  );
};
