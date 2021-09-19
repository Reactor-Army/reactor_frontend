import React from "react";
import {UNITS} from "../../common/fields";
import {Title} from "../ChemicalModels/Models/ModelsStyles";
import {BigButton} from "../Button/ButtonStyles";
import {VolumeResultsContainer, VolumeResultsText} from "./Styles";

export const VolumeResults = ({volume, onResetClick}) => {
  return (
    <VolumeResultsContainer>
      <Title>Resultado</Title>
      <VolumeResultsText>Volumen del reactor:</VolumeResultsText>
      <VolumeResultsText>
        <b>
          {volume} {UNITS.VOLUME}
        </b>
      </VolumeResultsText>
      <BigButton onClick={onResetClick}>Calcular otro volumen</BigButton>
    </VolumeResultsContainer>
  );
};
