import {processVolumeUrlFor} from "../../routing/urls";
import React from "react";
import {useHistory} from "react-router-dom";
import {
  EffectiveVolumeButtonContainer,
  EffectiveVolumeStyledButton,
} from "./Styles";

export const EffectiveVolumeButton = ({processId}) => {
  const history = useHistory();
  return (
    <EffectiveVolumeButtonContainer>
      <EffectiveVolumeStyledButton
        onClick={() => {
          history.push(processVolumeUrlFor(processId));
        }}>
        Calcular Volumen efectivo
      </EffectiveVolumeStyledButton>
    </EffectiveVolumeButtonContainer>
  );
};
