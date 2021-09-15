import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {Field} from "../ChemicalModelStyles";
import {ADAMS_BOHART_FIELDS} from "../../../common/fields";

export const AdamsBohartInputFields = ({F, C0, Z, U0}) => {
  return (
    <>
      <Field>
        <b>{ADAMS_BOHART_FIELDS.FLOW}:</b> {F} [{MODEL_UNITS.FLOW}]
      </Field>
      <Field>
        <b>{ADAMS_BOHART_FIELDS.INITIAL_CONCENTRATION}:</b> {C0} [
        {MODEL_UNITS.INITIAL_CONCENTRATION}]
      </Field>
      <Field>
        <b>{ADAMS_BOHART_FIELDS.REACTOR_HEIGHT}:</b> {Z} [
        {MODEL_UNITS.REACTOR_HEIGHT}]
      </Field>
      <Field>
        <b>{ADAMS_BOHART_FIELDS.LIQUID_VELOCITY}:</b> {U0} [
        {MODEL_UNITS.LIQUID_VELOCITY}]
      </Field>
    </>
  );
};
