import React from "react";
import {GoBackButtonContainer} from "./Styles";
import {Button} from "../Button/Button";

export const GoBackButton = ({onClick}) => (
  <GoBackButtonContainer>
    <Button size="medium" text="Volver" onClick={onClick} />
  </GoBackButtonContainer>
);
