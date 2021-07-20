import {Button} from "../Button/Button";
import {processVolumeUrlFor} from "../../routing/urls";
import React from "react";
import {useHistory} from "react-router-dom";
import {EffectiveVolumeButtonContainer} from "./Styles";

export const EffectiveVolumeButton = (processId) => {
  const history = useHistory();
  return (
    <EffectiveVolumeButtonContainer>
      <Button
        text={"Volumen efectivo"}
        onClick={() => {
          history.push(processVolumeUrlFor(processId));
        }}
      />
    </EffectiveVolumeButtonContainer>
  );
};
