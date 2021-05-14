import React from "react";
import {DataLabel} from "../CommonCardStyles";

import {FormulaComponent} from "./FormulaComponent";
import {FormulaContainer, SupIndex} from "./Styles";

export const FormulaLabel = ({formula, ionChargeFormula}) => {
  let components = Array.from(formula);
  return (
    <DataLabel>
      <FormulaContainer>
        {components.map((value) => {
          return (
            <FormulaComponent component={value} key={value}></FormulaComponent>
          );
        })}
        <SupIndex>{ionChargeFormula}</SupIndex>
      </FormulaContainer>
    </DataLabel>
  );
};
