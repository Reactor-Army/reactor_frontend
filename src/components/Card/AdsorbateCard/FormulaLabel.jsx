import React from "react";
import {FieldLabel} from "../CommonCardStyles";

import {FormulaComponent} from "./FormulaComponent";
import {FormulaContainer, SupIndex} from "./Styles";

export const FormulaLabel = ({formula, ionChargeFormula}) => {
  if (!formula) {
    return null;
  }
  let components = Array.from(formula);
  return (
    <FieldLabel>
      <FormulaContainer>
        {components.map((value) => {
          return <FormulaComponent component={value} key={value} />;
        })}
        <SupIndex>{ionChargeFormula}</SupIndex>
      </FormulaContainer>
    </FieldLabel>
  );
};
