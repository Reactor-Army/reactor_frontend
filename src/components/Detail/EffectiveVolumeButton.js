import {processVolumeUrlFor} from "../../routing/urls";
import React from "react";
import {useHistory} from "react-router-dom";
import {
  EffectiveVolumeButtonContainer,
  EffectiveVolumeStyledButton,
} from "./Styles";

export const EffectiveVolumeButton = ({processId, disabled}) => {
  const history = useHistory();
  return (
    <EffectiveVolumeButtonContainer>
      <EffectiveVolumeStyledButton
        disabled={disabled}
        onClick={() => {
          history.push(processVolumeUrlFor(processId));
        }}>
        Calcular Volumen efectivo
      </EffectiveVolumeStyledButton>
    </EffectiveVolumeButtonContainer>
  );
};
