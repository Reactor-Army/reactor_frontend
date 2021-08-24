import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const SBetValue = ({sBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.SBET}:</FieldLabel>
      <CardValue value={sBet} units={UNITS.SBET} />
    </BodyText>
  );
};
