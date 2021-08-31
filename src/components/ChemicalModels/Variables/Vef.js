import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {Unit} from "./Unit";
import {VariableName} from "./VariableName";

export const Vef = () => {
  return (
    <VariableContainer>
      <VariableName letter={"V"} subLetters={"ef"}></VariableName>
      <InfoVariable>Es el volumen del efluente</InfoVariable>
      <>[</>
      <Unit unit={"L"}></Unit>
      <>]</>
    </VariableContainer>
  );
};
