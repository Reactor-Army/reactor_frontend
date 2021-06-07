import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {spillLimit} from "../../../common/formatting/spillLimit";

export const DischargeLimit = ({dischargeLimit}) => {
  return (
    <BodyText>
      <FieldLabel>Límite de vertido (Ley 24.051):</FieldLabel>
      <FieldValue>{spillLimit(dischargeLimit)}</FieldValue>
    </BodyText>
  );
};
