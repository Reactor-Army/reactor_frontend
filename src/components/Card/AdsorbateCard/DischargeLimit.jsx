import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";

export const DischargeLimit = ({dischargeLimit}) => {
  return (
    <BodyText>
      <FieldLabel>Límite de vertido(Ley 24.051):</FieldLabel>
      <FieldValue>{dischargeLimit ? dischargeLimit : "No Regulado"}</FieldValue>
    </BodyText>
  );
};
