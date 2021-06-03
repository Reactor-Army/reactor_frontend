import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const IonRadius = ({ionRadius}) => {
  return (
    <BodyText>
      <FieldLabel>Radio hidrodinámico:</FieldLabel>
      <FieldValue>{ionRadius} Å</FieldValue>
    </BodyText>
  );
};
