import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {Unit} from "./Unit";
import {UnderUnit} from "./UnderUnit";
import {VariableName} from "./VariableName";

export const F = () => {
  return (
    <VariableContainer>
      <VariableName letter={"F"}></VariableName>
      <InfoVariable>Es el caudal volumétrico de operación</InfoVariable>
      <>[</>
      <Unit unit={"mL"}></Unit>
      <UnderUnit unit={"min"}></UnderUnit>
      <>]</>
    </VariableContainer>
  );
};
