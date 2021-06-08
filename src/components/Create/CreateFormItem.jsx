import {FormItemContainer} from "./Styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {ERROR_MESSAGES} from "./constants";

export const CreateFormItem = ({item, setFormValue, errorType}) => {
  const {key, label, required, type} = item;
  return (
    <FormItemContainer key={key}>
      <Typography>{`${label}${required ? "*" : ""}`}</Typography>
      <TextField
        id="standard-disabled"
        variant="outlined"
        type={type}
        error={Boolean(errorType) || false}
        helperText={errorType && ERROR_MESSAGES[errorType]}
        required={required || false}
        onChange={(e) => setFormValue(key, e.target.value)}
      />
    </FormItemContainer>
  );
};
