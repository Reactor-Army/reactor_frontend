import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const Impurities = ({impurities}) => {
  return (
    <BodyText>
      <FieldLabel>Impurezas: </FieldLabel>
      <FieldValue>{impurities}</FieldValue>
    </BodyText>
  );
};
