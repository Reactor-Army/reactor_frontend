import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const SampleOrigin = ({sampleOrigin}) => {
  return (
    <BodyText>
      <FieldLabel>Origen de la muestra: </FieldLabel>
      <FieldValue>{sampleOrigin}</FieldValue>
    </BodyText>
  );
};
