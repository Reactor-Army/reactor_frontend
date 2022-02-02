import React from "react";
import {UNITS} from "../../common/fields";
import {
  VolumeResultsContainer,
  VolumeResultsText,
  VolumeResultsTitle,
  Button,
  VolumeResult,
} from "./Styles";

export const VolumeResults = ({volume, onResetClick}) => {
  return (
    <VolumeResultsContainer>
      <VolumeResultsTitle>Resultado</VolumeResultsTitle>
      <VolumeResult>
        <VolumeResultsText>Volumen del reactor:</VolumeResultsText>
        <VolumeResultsText>
          <b>
            {volume} {UNITS.VOLUME}
          </b>
        </VolumeResultsText>
      </VolumeResult>
      <Button onClick={onResetClick}>Calcular otro volumen</Button>
    </VolumeResultsContainer>
  );
};
