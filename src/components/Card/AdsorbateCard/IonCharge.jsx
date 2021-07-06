import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBATE_FIELDS} from "../../../common/fields";

export const IonCharge = ({ionCharge}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.ION_CHARGE}:</FieldLabel>
      <FieldValue>{ionCharge}</FieldValue>
    </BodyText>
  );
};
