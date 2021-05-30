import React from "react";
import {FooterItem, FieldLabel} from "../CommonCardStyles";

export const SBetValue = ({sBet}) => {
  return (
    <FooterItem>
      <FieldLabel>sBet:</FieldLabel> {sBet} m<sup>2</sup>/g
    </FooterItem>
  );
};
