import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {Sup} from "../../Card/CommonCardStyles";

export const SBetValue = ({sBet}) => {
  return (
    <BodyText>
      <FieldLabel>sBet:</FieldLabel>
      <FieldValue>
        {sBet} m<Sup>2</Sup>/g
      </FieldValue>
    </BodyText>
  );
};
