import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBATE_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const IonRadius = ({ionRadius}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.ION_RADIUS}:</FieldLabel>
      <CardValue value={ionRadius} units={UNITS.ION_RADIUS} />
    </BodyText>
  );
};
