import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const SpeciesName = ({speciesName}) => {
  return (
    <BodyText>
      <FieldLabel>Nombre de la especie: </FieldLabel>
      <FieldValue>{speciesName}</FieldValue>
    </BodyText>
  );
};
