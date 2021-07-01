import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBATE_FIELDS} from "../../../common/text";

export const IonRadius = ({ionRadius}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.ION_RADIUS}:</FieldLabel>
      <FieldValue>{ionRadius} Å</FieldValue>
    </BodyText>
  );
};
