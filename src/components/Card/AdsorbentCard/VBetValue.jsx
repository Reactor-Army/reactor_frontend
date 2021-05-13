import React from "react";
import {FooterItem, DataLabel} from "../CommonCardStyles";

export const VBetValue = ({vBet}) => {
  return (
    <FooterItem>
      <DataLabel>vBet:</DataLabel> {vBet} cm<sup>3</sup>/g
    </FooterItem>
  );
};
