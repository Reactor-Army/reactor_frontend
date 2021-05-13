import React from "react";
import {FooterItem, DataLabel} from "../CommonCardStyles";

export const SBetValue = ({sBet}) => {
  return (
    <FooterItem>
      <DataLabel>sBet:</DataLabel> {sBet} m<sup>2</sup>/g
    </FooterItem>
  );
};
