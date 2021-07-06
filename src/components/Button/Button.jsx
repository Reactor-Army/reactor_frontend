import React from "react";
import {StyledButton, StyledSubmit} from "./ButtonStyles";

export const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export const SubmitButton = ({text, disabled}) => {
  return <StyledSubmit disabled={disabled}>{text}</StyledSubmit>;
};
