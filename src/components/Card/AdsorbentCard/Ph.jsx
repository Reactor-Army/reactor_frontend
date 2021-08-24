import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const Ph = ({ph}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.PH}:</FieldLabel>
      <CardValue value={ph} />
    </BodyText>
  );
};
