import {FormItemContainer} from "./Styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {ERROR_MESSAGES} from "./constants";

export const CreateFormItem = ({
  item,
  value,
  setFormValue,
  errorType,
  setError,
}) => {
  const {key, label, required, type, processValue} = item;
  const onChange = (e) => {
    let value = e.target.value;
    let errorDetected = false;
    const innerSetError = (e) => {
      setError(e);
      errorDetected = true;
    };
    if (processValue) {
      value = processValue(value, innerSetError);
    }
    if (!errorDetected) {
      setError(null);
    }
    setFormValue(key, value, !errorDetected);
  };
  return (
    <FormItemContainer key={key}>
      <Typography>{`${label}${required ? "*" : ""}`}</Typography>
      <TextField
        variant="outlined"
        type={type}
        error={Boolean(errorType) || false}
        helperText={errorType && (ERROR_MESSAGES[errorType] || errorType)}
        required={required || false}
        onChange={onChange}
        value={value}
      />
    </FormItemContainer>
  );
};
