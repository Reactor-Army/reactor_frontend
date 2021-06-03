import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const Ph = ({ph}) => {
  return (
    <BodyText>
      <FieldLabel>pH(carga cero):</FieldLabel>
      <FieldValue>{ph}</FieldValue>
    </BodyText>
  );
};
