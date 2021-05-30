import React from "react";
import {FooterItem, FieldLabel} from "../CommonCardStyles";

export const VBetValue = ({vBet}) => {
  return (
    <FooterItem>
      <FieldLabel>vBet:</FieldLabel> {vBet} cm<sup>3</sup>/g
    </FooterItem>
  );
};
