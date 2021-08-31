import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {Unit} from "./Unit";
import {VariableName} from "./VariableName";

export const W = () => {
  return (
    <VariableContainer>
      <VariableName letter={"W"}></VariableName>
      <InfoVariable>
        Es la cantidad de sorbente en el interior del reactor
      </InfoVariable>
      <>[</>
      <Unit unit={"g"}></Unit>
      <>]</>
    </VariableContainer>
  );
};
