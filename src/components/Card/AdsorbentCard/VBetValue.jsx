import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {Sup} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";

export const VBetValue = ({vBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.VBET}:</FieldLabel>
      <FieldValue>
        {vBet} cm<Sup>3</Sup>/g
      </FieldValue>
    </BodyText>
  );
};
