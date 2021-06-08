import {CreateFormContainer} from "./Styles";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from "react-router-dom";
import {URLS} from "../../routing/urls";
import {CreateFormItem} from "./CreateFormItem";

export const CreateForm = ({items, onFormSubmit}) => {
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
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
      const responseData = await onFormSubmit(values);
      setLoading(false);
      if (responseData.error) {
        setErrorMessage(responseData.message);
        return;
      }
      history.push(URLS.ADSORBATES_LIST);
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
            />
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
    </>
  );
};
