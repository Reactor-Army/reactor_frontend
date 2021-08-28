import React from "react";
import {ExpandableCardContainer, Icon, Text} from "./ExpandableCardStyles";

export const ExpandableCard = (props) => {
  return (
    <ExpandableCardContainer onClick={props.onClick}>
      <Icon src={props.icon} alt="icon" />
      <Text>{props.text}</Text>
    </ExpandableCardContainer>
  );
};
