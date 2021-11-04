import React from "react";
import {BodyText, FieldLabel} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/fields";
import {CardValue} from "../CardValue/CardValue";
import {UNITS} from "../../../common/fields";

export const ParticleSize = ({particleSize}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.PARTICLE_SIZE}:</FieldLabel>
      <CardValue value={`${particleSize} ${UNITS.PARTICLE_SIZE}`} />
    </BodyText>
  );
};
