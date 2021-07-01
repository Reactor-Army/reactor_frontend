import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";

export const Ph = ({ph}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.PH}:</FieldLabel>
      <FieldValue>{ph}</FieldValue>
    </BodyText>
  );
};
