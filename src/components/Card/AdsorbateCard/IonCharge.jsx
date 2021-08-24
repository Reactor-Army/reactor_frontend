import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBATE_FIELDS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const IonCharge = ({ionCharge}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.ION_CHARGE}:</FieldLabel>
      <CardValue value={ionCharge} />
    </BodyText>
  );
};
