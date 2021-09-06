import React from "react";
import {
  SmallButton,
  MediumButton,
  BigButton,
  StyledSubmit,
} from "./ButtonStyles";

export const Button = ({text, onClick, size}) => {
  switch (size) {
    case "big":
      return <BigButton onClick={onClick}>{text}</BigButton>;
    case "medium":
      return <MediumButton onClick={onClick}>{text}</MediumButton>;
    default:
      return <SmallButton onClick={onClick}>{text}</SmallButton>;
  }
};

export const SubmitButton = ({text, disabled}) => {
  return <StyledSubmit disabled={disabled}>{text}</StyledSubmit>;
};
