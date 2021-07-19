import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {FormTextField, FormNumericField} from "../Form/Fields/FormFields";
import {ADSORBATE_FIELDS} from "../../common/fields";
import {isSet, isPositive, isInteger} from "../Form/Validation/formValidations";
import {ADSORBATE_FORM_INITIAL_VALUES} from "../../common/constants";
import {filterBlank} from "./validations";
import {allNullKeys} from "../../utils/allNullKeys";
import {UNITS, ADSORBATE_REQUEST_FIELDS} from "../../common/fields";
import {formInitialValuesFromObject} from "../../utils/formInitialValuesFromObject";

export const AdsorbateForm = ({
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
          placeholder={ADSORBATE_FIELDS.ION_NAME}
          key={1}
          name={ADSORBATE_REQUEST_FIELDS.ION_NAME}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.ION_NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, nombreIon: isSet(value)};
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.IUPAC_NAME}
          key={2}
          name={ADSORBATE_REQUEST_FIELDS.IUPAC_NAME}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.IUPAC_NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, nombreIUPAC: isSet(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBATE_FIELDS.ION_CHARGE}
          key={3}
          name={ADSORBATE_REQUEST_FIELDS.ION_CHARGE}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.ION_CHARGE]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                cargaIon: isSet(value) || isInteger(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADSORBATE_FIELDS.ION_RADIUS} (${UNITS.ION_RADIUS})`}
          key={4}
          name={ADSORBATE_REQUEST_FIELDS.ION_RADIUS}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.ION_RADIUS]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, radioIonico: isPositive(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADSORBATE_FIELDS.SPILL_LIMIT} (${UNITS.SPILL_LIMIT})`}
          key={5}
          name={ADSORBATE_REQUEST_FIELDS.SPILL_LIMIT}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.SPILL_LIMIT]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, limiteVertido: isPositive(value)};
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.FORMULA}
          key={6}
          name={ADSORBATE_REQUEST_FIELDS.FORMULA}
        />,
        <FormNumericField
          placeholder={`${ADSORBATE_FIELDS.MOLAR_MASS} (${UNITS.MOLAR_MASS})`}
          key={7}
          name={ADSORBATE_REQUEST_FIELDS.MOLAR_MASS}
          error={errorValues[ADSORBATE_REQUEST_FIELDS.MOLAR_MASS]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, masaMolar: isPositive(value)};
            });
          }}
        />,
      ]}
    />
  );
};
