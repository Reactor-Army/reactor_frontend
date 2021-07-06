import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {Sup} from "../../Card/CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";

export const SBetValue = ({sBet}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.SBET}:</FieldLabel>
      <FieldValue>
        {sBet} m<Sup>2</Sup>/g
      </FieldValue>
    </BodyText>
  );
};
