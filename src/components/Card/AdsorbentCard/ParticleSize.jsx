import React from "react";
import {BodyText, FieldLabel, FieldValue} from "../CommonCardStyles";
import {ADSORBENT_FIELDS} from "../../../common/text";

export const ParticleSize = ({particleSize}) => {
  return (
    <BodyText>
      <FieldLabel>{ADSORBENT_FIELDS.PARTICLE_SIZE}:</FieldLabel>
      <FieldValue>{particleSize}</FieldValue>
    </BodyText>
  );
};
