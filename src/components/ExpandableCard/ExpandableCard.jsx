import React from "react";
import {ExpandableCardContainer} from "./ExpandableCardStyles";

export const ExpandableCard = (props) => {
  return <ExpandableCardContainer onClick={props.onClick} />;
};
