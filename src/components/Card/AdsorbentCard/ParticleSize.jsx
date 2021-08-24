import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";

export const ParticleSize = ({particleSize}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.PARTICLE_SIZE}:</FieldLabel>
      <CardValue value={particleSize} />
    </BodyText>
  );
};
