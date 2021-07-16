import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {UNITS} from "../../../common/fields";

export const SBetValue = ({sBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.SBET}:</FieldLabel>
      <FieldValue>{`${sBet} ${UNITS.SBET}`}</FieldValue>
    </BodyText>
  );
};
