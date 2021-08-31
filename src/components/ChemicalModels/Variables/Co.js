import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {UnderUnit} from "./UnderUnit";
import {Unit} from "./Unit";
import {VariableName} from "./VariableName";

export const Co = () => {
  return (
    <VariableContainer>
      <VariableName letter={"C"} subLetters={"o"}></VariableName>
      <InfoVariable>
        Es la concentración de metal en la alimentación
      </InfoVariable>
      <>[</>
      <Unit unit={"mmol"}></Unit>
      <UnderUnit unit={"L"}></UnderUnit>
      <>]</>
    </VariableContainer>
  );
};
