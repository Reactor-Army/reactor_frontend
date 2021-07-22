import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {
  FormTextField,
  FormNumericField,
  FormBigTextField,
} from "../Form/Fields/FormFields";
import {ADSORBATE_FIELDS, ADSORBENT_FIELDS} from "../../common/fields";
import {isSet, isPositive, inRange} from "../Form/Validation/formValidations";
import {ADSORBENT_FORM_INITIAL_VALUES} from "../../common/constants";
import {filterBlank} from "./validations";
import {allNullKeys} from "../../utils/allNullKeys";
import {UNITS, ADSORBENT_REQUEST_FIELDS} from "../../common/fields";
import {formInitialValuesFromObject} from "../../utils/formInitialValuesFromObject";

export const AdsorbentForm = ({
  title,
  onSubmit,
  buttonLabel,
  setErrors,
  initialValues,
}) => {
  const [initial, setInitial] = useState(ADSORBENT_FORM_INITIAL_VALUES);

  const [errorValues, setErrorValues] = useState(
    allNullKeys(ADSORBENT_FORM_INITIAL_VALUES),
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
          placeholder={ADSORBENT_FIELDS.NAME}
          key={1}
          name={ADSORBENT_REQUEST_FIELDS.NAME}
          error={errorValues[ADSORBENT_REQUEST_FIELDS.NAME]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADSORBENT_REQUEST_FIELDS.NAME]: isSet(value),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.PARTICLE_SIZE}
          key={2}
          name={ADSORBENT_REQUEST_FIELDS.PARTICLE_SIZE}
          error={errorValues[ADSORBENT_REQUEST_FIELDS.PARTICLE_SIZE]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADSORBENT_REQUEST_FIELDS.PARTICLE_SIZE]: isSet(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADSORBENT_FIELDS.SBET} (${UNITS.SBET})`}
          key={3}
          name={ADSORBENT_REQUEST_FIELDS.SBET}
          error={errorValues[ADSORBENT_REQUEST_FIELDS.SBET]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADSORBENT_REQUEST_FIELDS.SBET]: isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADSORBENT_FIELDS.VBET} (${UNITS.VBET})`}
          key={4}
          name={ADSORBENT_REQUEST_FIELDS.VBET}
          error={errorValues[ADSORBENT_REQUEST_FIELDS.VBET]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADSORBENT_REQUEST_FIELDS.VBET]: isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBENT_FIELDS.PH}
          key={5}
          name={ADSORBENT_REQUEST_FIELDS.PH}
          error={errorValues[ADSORBENT_REQUEST_FIELDS.PH]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADSORBENT_REQUEST_FIELDS.PH]: inRange(value, 1, 14),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.FORMULA}
          key={6}
          name={ADSORBENT_REQUEST_FIELDS.FORMULA}
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.IMPURITIES}
          key={7}
          name={ADSORBENT_REQUEST_FIELDS.IMPURITIES}
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.SOURCE}
          key={8}
          name={ADSORBENT_REQUEST_FIELDS.SOURCE}
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.SPECIES_NAME}
          key={9}
          name={ADSORBENT_REQUEST_FIELDS.SPECIES_NAME}
        />,
        <FormBigTextField
          placeholder={ADSORBENT_FIELDS.NOTES}
          key={10}
          name={ADSORBENT_REQUEST_FIELDS.NOTES}
        />,
      ]}
    />
  );
};
