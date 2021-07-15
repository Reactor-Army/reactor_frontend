import React, {useState, useEffect} from "react";
import {Form} from "../Form/Form";
import {FormTextField, FormNumericField} from "../Form/Fields/FormFields";
import {ADSORBATE_FIELDS} from "../../common/fields";
import {isSet, isPositive, isInteger} from "../Form/Validation/formValidations";
import {ADSORBATE_FORM_INITIAL_VALUES} from "../../common/constants";
import {filterBlank} from "./validations";
import {allNullKeys} from "../../utils/allNullKeys";

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
      setInitial(initialValues);
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
          name="nombreIon"
          error={errorValues["nombreIon"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, nombreIon: isSet(value)};
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.IUPAC_NAME}
          key={2}
          name="nombreIUPAC"
          error={errorValues["nombreIUPAC"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, nombreIUPAC: isSet(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBATE_FIELDS.ION_CHARGE}
          key={3}
          name="cargaIon"
          error={errorValues["cargaIon"]}
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
          placeholder={ADSORBATE_FIELDS.ION_RADIUS}
          key={4}
          name="radioIonico"
          error={errorValues["radioIonico"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, radioIonico: isPositive(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBATE_FIELDS.SPILL_LIMIT}
          key={5}
          name="limiteVertido"
          error={errorValues["limiteVertido"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, limiteVertido: isPositive(value)};
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.FORMULA}
          key={6}
          name="formula"
        />,
        <FormNumericField
          placeholder={ADSORBATE_FIELDS.MOLAR_MASS}
          key={7}
          name="masaMolar"
          error={errorValues["masaMolar"]}
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
