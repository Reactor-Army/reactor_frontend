import React from "react";
import {Info, UnitContainer} from "../../Modals/ModalStyles";

export const Unit = ({unit}) => {
  return (
    <UnitContainer>
      <Info>{unit}</Info>
    </UnitContainer>
  );
};
