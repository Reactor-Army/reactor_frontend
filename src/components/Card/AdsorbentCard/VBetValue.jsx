import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {Sup} from "./Styles";

export const VBetValue = ({vBet}) => {
  return (
    <BodyText>
      <FieldLabel>vBet:</FieldLabel>{" "}
      <FieldValue>
        {vBet} cm<Sup>3</Sup>/g
      </FieldValue>
    </BodyText>
  );
};
