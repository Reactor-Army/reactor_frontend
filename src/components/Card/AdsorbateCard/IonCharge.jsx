import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const IonCharge = ({ionCharge}) => {
  return (
    <BodyText>
      <FieldLabel>Carga del ion:</FieldLabel>
      <FieldValue>{ionCharge}</FieldValue>
    </BodyText>
  );
};
