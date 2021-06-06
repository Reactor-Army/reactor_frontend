import {CreateFormContainer, FormItem} from "./Styles";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from "react-router-dom";
import {URLS} from "../../routing/urls";

const ERROR_MESSAGES = {
  REQUIRED_FIELD: "Este campo es obligatorio.",
};

export const CreateForm = ({items, onFormSubmit}) => {
  const [values, setValues] = useState({});
  const setFormValue = (itemKey, value) => {
    setValues((prevState) => {
      return {...prevState, [itemKey]: value};
    });
    setErrors((prevState) => {
      const result = {...prevState};
      delete result[itemKey];
      return result;
    });
  };

  const [errors, setErrors] = useState({});
  const history = useHistory();
  const onClick = async () => {
    let errors = false;
    for (const item of items) {
      if (item.required && !values[item.key]) {
        setErrors((prevState) => {
          return {...prevState, [item.key]: "REQUIRED_FIELD"};
        });
        errors = true;
      }
    }
    if (!errors) {
      setLoading(true);
      const response = await onFormSubmit(values);
      setLoading(false);
      if (response) {
        history.push(URLS.ADSORBATES_LIST);
      }
    }
  };

  const [loading, setLoading] = useState(false);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <CreateFormContainer>
      {items.map(({key, label, type, required}) => {
        return (
          <FormItem key={key}>
            <Typography h4>{label}</Typography>
            <TextField
              id="standard-disabled"
              variant="outlined"
              type={type}
              error={errors[key] || false}
              helperText={errors[key] && ERROR_MESSAGES[errors[key]]}
              required={required || false}
              onChange={(e) => setFormValue(key, e.target.value)}
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
