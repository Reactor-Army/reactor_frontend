import React from "react";
import {NameVariable} from "../InfoStyles";

export const VariableName = ({letter, subLetters}) => {
  return (
    <NameVariable>
      {letter}
      <sub>{subLetters}</sub>
    </NameVariable>
  );
};
