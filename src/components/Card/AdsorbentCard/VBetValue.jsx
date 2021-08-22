import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";

export const VBetValue = ({vBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.VBET}:</FieldLabel>
      <FieldValue>{vBet !== null ? `${vBet} ${UNITS.VBET}` : "-"}</FieldValue>
    </BodyText>
  );
};
