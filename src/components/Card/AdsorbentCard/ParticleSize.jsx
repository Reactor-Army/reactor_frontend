import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const ParticleSize = ({particleSize}) => {
  return (
    <BodyText>
      <FieldLabel>Tamaño de partícula: </FieldLabel>
      <FieldValue>{particleSize}</FieldValue>
    </BodyText>
  );
};
