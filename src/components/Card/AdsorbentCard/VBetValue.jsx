import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const VBetValue = ({vBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.VBET}:</FieldLabel>
      <CardValue value={vBet} units={UNITS.VBET} />
    </BodyText>
  );
};
