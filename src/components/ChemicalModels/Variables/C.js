import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {Unit} from "./Unit";
import {UnderUnit} from "./UnderUnit";
import {VariableName} from "./VariableName";

export const C = () => {
  return (
    <VariableContainer>
      <VariableName letter={"C"}></VariableName>
      <InfoVariable>Es la concentración de salida</InfoVariable>
      <>[</>
      <Unit unit={"mmol"}></Unit>
      <UnderUnit unit={"L"}></UnderUnit>
      <>]</>
    </VariableContainer>
  );
};
