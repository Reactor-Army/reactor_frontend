import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {spillLimit} from "../../../common/formatting/spillLimit";
import {ADSORBATE_FIELDS} from "../../../common/fields";

export const DischargeLimit = ({dischargeLimit}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.SPILL_LIMIT}:</FieldLabel>
      <FieldValue>{spillLimit(dischargeLimit)}</FieldValue>
    </BodyText>
  );
};
