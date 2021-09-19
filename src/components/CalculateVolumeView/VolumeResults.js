import React from "react";
import {UNITS} from "../../common/fields";
import {BigButton} from "../Button/ButtonStyles";
import {
  VolumeResultsContainer,
  VolumeResultsText,
  VolumeResultsTitle,
} from "./Styles";

export const VolumeResults = ({volume, onResetClick}) => {
  return (
    <VolumeResultsContainer>
      <VolumeResultsTitle>Resultado</VolumeResultsTitle>
      <div>
        <VolumeResultsText>Volumen del reactor:</VolumeResultsText>
        <VolumeResultsText>
          <b>
            {volume} {UNITS.VOLUME}
          </b>
        </VolumeResultsText>
      </div>
      <BigButton onClick={onResetClick}>Calcular otro volumen</BigButton>
    </VolumeResultsContainer>
  );
};
