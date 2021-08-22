import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBATE_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";

export const IonRadius = ({ionRadius}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.ION_RADIUS}:</FieldLabel>
      <FieldValue>
        {ionRadius !== null ? `${ionRadius} ${UNITS.ION_RADIUS}` : "-"}
      </FieldValue>
    </BodyText>
  );
};
