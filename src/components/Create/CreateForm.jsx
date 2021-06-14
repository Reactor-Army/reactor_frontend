import {CreateFormContainer, useStyles} from "./Styles";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from "react-router-dom";
import {CreateFormItem} from "./CreateFormItem";
import {REQUIRED_FIELD} from "./constants";

export const CreateForm = ({items, onFormSubmit, url}) => {
  const styles = useStyles();
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const setFormValue = (itemKey, value) => {
    setValues((prevState) => {
      return {...prevState, [itemKey]: value};
    });
  };

  const [errors, setErrors] = useState({});
  const history = useHistory();
  const onClick = async () => {
    let errors = false;
    for (const item of items) {
      if (errors[item.key]) {
        errors = true;
        continue;
      }
      if (item.required && !values[item.key]) {
        setErrors((prevState) => {
          return {...prevState, [item.key]: REQUIRED_FIELD};
        });
        errors = true;
      }
    }
    if (!errors) {
      setLoading(true);
      const responseData = await onFormSubmit(values);
      setLoading(false);
      if (responseData.error) {
        setErrorMessage(responseData.message);
        return;
      }
      history.push(url);
    }
  };

  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? <CircularProgress /> : null}
      <CreateFormContainer>
        {errorMessage && (
          <Typography color={"error"}>{errorMessage}</Typography>
        )}
        {items.map((item) => {
          return (
            <CreateFormItem
              key={item.key}
              value={values[item.key] || ""}
              item={item}
              setFormValue={setFormValue}
              errorType={errors[item.key]}
              setError={(e) => setErrors({...errors, [item.key]: e})}
            />
          );
        })}
        <Button
          onClick={onClick}
          className={styles.button}
          variant="contained"
          disabled={hasErrors(errors)}
          color="primary">
          Agregar
        </Button>
      </CreateFormContainer>
    </>
  );
};

const hasErrors = (errors) => {
  if (!errors) {
    return false;
  }
  return Object.values(errors).some((value) => value !== null);
};
