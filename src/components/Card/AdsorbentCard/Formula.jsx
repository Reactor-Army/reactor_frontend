import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const Formula = ({formula}) => {
  return (
    <BodyText>
      <FieldLabel>Formula: </FieldLabel>
      <FieldValue>{formula}</FieldValue>
    </BodyText>
  );
};
