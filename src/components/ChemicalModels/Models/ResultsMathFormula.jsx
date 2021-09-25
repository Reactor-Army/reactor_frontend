import {Field} from "../ChemicalModelStyles";
import Latex from "react-latex";
import React from "react";

export const ResultsMathFormula = ({equation}) => (
  <>
    <Field>
      <b>Expresión matemática</b>
    </Field>
    <Latex displayMode={true}>{equation}</Latex>
  </>
);
