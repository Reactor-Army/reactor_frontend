import {ButtonContainer} from "./FormStyles";
import {SubmitButton} from "../Button/Button";
import React from "react";

export const FormSubmitButton = ({buttonLabel, disabled}) => {
  return (
    <ButtonContainer>
      <SubmitButton text={buttonLabel} disabled={disabled} />
    </ButtonContainer>
  );
};
