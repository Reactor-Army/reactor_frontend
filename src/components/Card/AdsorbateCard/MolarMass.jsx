import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const MolarMass = ({molarMass}) => {
  return (
    <BodyText>
      <FieldLabel>Masa Molar:</FieldLabel>
      <FieldValue>{molarMass} g/mol</FieldValue>
    </BodyText>
  );
};
