import {CreateFormContainer, FormItem} from "./Styles";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const CreateForm = ({items, onFormSubmit}) => {
  const [values, setValues] = useState({});
  const setFormValue = (item, value) => {
    setValues((prevState) => {
      return {...prevState, [item]: value};
    });
  };
  const onClick = () => {
    onFormSubmit(values);
  };
  return (
    <CreateFormContainer>
      {items.map(({label, type, required}) => {
        return (
          <FormItem key={label}>
            <Typography h4>{label}</Typography>
            <TextField
              id="standard-disabled"
              variant="outlined"
              type={type}
              required={required || false}
              onChange={(e) => setFormValue(label, e.target.value)}
            />
          </FormItem>
        );
      })}
      <Button
        onClick={onClick}
        style={{margin: 10}}
        variant="contained"
        color="primary">
        Agregar
      </Button>
    </CreateFormContainer>
  );
};
