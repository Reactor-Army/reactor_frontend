import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {spillLimit} from "../../../common/formatting/spillLimit";
import {ADSORBATE_FIELDS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const DischargeLimit = ({dischargeLimit}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBATE_FIELDS.SPILL_LIMIT}:</FieldLabel>
      <CardValue value={spillLimit(dischargeLimit)} />
    </BodyText>
  );
};
