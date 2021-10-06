import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {FormTextField} from "../Form/Fields/FormFields";
import {USER_FIELDS} from "../../common/fields";
import {isSet} from "../Form/Validation/formValidations";
import {ADSORBATE_FORM_INITIAL_VALUES} from "../../common/constants";
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
  const [initial, setInitial] = useState(ADSORBATE_FORM_INITIAL_VALUES);

  const [errorValues, setErrorValues] = useState(
    allNullKeys(ADSORBATE_FORM_INITIAL_VALUES),
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
      ]}
    />
  );
};
