import React from "react";
import {Info, UnitContainer, SupUnit} from "../../Modals/ModalStyles";

export const UnderUnit = ({unit}) => {
  return (
    <UnitContainer>
      <Info>{unit}</Info>
      <SupUnit>-1</SupUnit>
    </UnitContainer>
  );
};
