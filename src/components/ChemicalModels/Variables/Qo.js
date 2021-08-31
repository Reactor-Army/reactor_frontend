import React from "react";
import {InfoVariable, VariableContainer} from "../../Modals/ModalStyles";
import {UnderUnit} from "./UnderUnit";
import {Unit} from "./Unit";
import {VariableName} from "./VariableName";

export const Qo = () => {
  return (
    <VariableContainer>
      <VariableName letter={"q"} subLetters={"o"}></VariableName>
      <InfoVariable>
        Es la máxima concentración de soluto en la fase solida
      </InfoVariable>
      <>[</>
      <Unit unit={"mmol"}></Unit>
      <UnderUnit unit={"g"}></UnderUnit>
      <>]</>
    </VariableContainer>
  );
};
