import React from "react";
import {StyledButton} from "./ButtonStyles";

export const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
