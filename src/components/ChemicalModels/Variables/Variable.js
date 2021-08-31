import React from "react";
import {InfoVariable, VariableContainer} from "../InfoStyles";
import {VariableName} from "./VariableName";

export const Variable = ({letter, subletters, info}) => {
  return (
    <VariableContainer>
      <VariableName letter={letter} subLetters={subletters}></VariableName>
      <InfoVariable>{info}</InfoVariable>
    </VariableContainer>
  );
};
