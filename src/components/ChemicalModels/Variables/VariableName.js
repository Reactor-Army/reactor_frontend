import React from "react";
import {NameVariable, SubName} from "../InfoStyles";

export const VariableName = ({letter, subLetters}) => {
  return (
    <NameVariable>
      <>{letter}</>
      <SubName>{subLetters}</SubName>
    </NameVariable>
  );
};
