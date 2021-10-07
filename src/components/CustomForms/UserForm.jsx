import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {
  FormTextField,
  FormSelectorField,
  FormBigTextField,
} from "../Form/Fields/FormFields";
import {USER_FIELDS} from "../../common/fields";
import {
  isSet,
  isValidPassword,
  isValidEmail,
} from "../Form/Validation/formValidations";
import {USER_FORM_INITIAL_VALUES} from "../../common/constants";
import {filterBlank} from "./validations";
import {allNullKeys} from "../../utils/allNullKeys";
import {USER_REQUEST_FIELDS} from "../../common/fields";
import {formInitialValuesFromObject} from "../../utils/formInitialValuesFromObject";

export const UserForm = ({
  title,
  onSubmit,
  buttonLabel,
  setErrors,
  initialValues,
}) => {
  const [initial, setInitial] = useState(USER_FORM_INITIAL_VALUES);
  const roles = [
    {label: "Administrador", value: "ROLE_ADMIN"},
    {label: "Usuario", value: "ROLE_USER"},
  ];

  const [errorValues, setErrorValues] = useState(
    allNullKeys(USER_FORM_INITIAL_VALUES),
  );

  useEffect(() => {
    if (initialValues) {
      setInitial(formInitialValuesFromObject(initialValues));
    }
  }, [initialValues]);

  useEffect(() => {
    setErrors(filterBlank(errorValues));
  }, [filterBlank(errorValues)]);

  return (
    <Form
      initialValues={initial}
      onSubmit={onSubmit}
      title={title}
      buttonLabel={buttonLabel}
      errors={filterBlank(errorValues)}
      fields={[
        <FormTextField
          placeholder={USER_FIELDS.NAME}
          key={1}
          name={USER_REQUEST_FIELDS.NAME}
          error={errorValues[USER_REQUEST_FIELDS.NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.NAME]: isSet(value),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={USER_FIELDS.LAST_NAME}
          key={2}
          name={USER_REQUEST_FIELDS.LAST_NAME}
          error={errorValues[USER_REQUEST_FIELDS.LAST_NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.LAST_NAME]: isSet(value),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={USER_FIELDS.EMAIL}
          key={3}
          name={USER_REQUEST_FIELDS.EMAIL}
          error={errorValues[USER_REQUEST_FIELDS.EMAIL]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.EMAIL]:
                  isSet(value) || isValidEmail(value),
              };
            });
          }}
        />,
        <FormTextField
          type="password"
          placeholder={USER_FIELDS.PASSWORD}
          key={4}
          name={USER_REQUEST_FIELDS.PASSWORD}
          error={errorValues[USER_REQUEST_FIELDS.PASSWORD]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.PASSWORD]:
                  isSet(value) || isValidPassword(value),
              };
            });
          }}
        />,
        <FormSelectorField
          key={5}
          placeholder={USER_FIELDS.ROLE}
          items={roles}
          name={USER_REQUEST_FIELDS.ROLE}
          error={errorValues[USER_REQUEST_FIELDS.ROLE]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [USER_REQUEST_FIELDS.ROLE]: isSet(value),
              };
            });
          }}
        />,
        <FormBigTextField
          placeholder={USER_FIELDS.DESCRIPTION}
          key={6}
          name={USER_REQUEST_FIELDS.DESCRIPTION}
        />,
      ]}
    />
  );
};
