import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {UnderUnit} from "./UnderUnit";
import {Unit} from "./Unit";
import {VariableName} from "./VariableName";

export const Kth = () => {
  return (
    <VariableContainer>
      <VariableName letter={"K"} subLetters={"th"}></VariableName>
      <InfoVariable>Es la constante de velocidad de Thomas</InfoVariable>
      <>[</>
      <Unit unit={"mL"}></Unit>
      <UnderUnit unit={"min"}></UnderUnit>
      <UnderUnit unit={"g"}></UnderUnit>
      <>]</>
    </VariableContainer>
  );
};
