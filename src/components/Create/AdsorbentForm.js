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
          name="nombre"
          error={errorValues["nombre"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, nombre: isSet(value)};
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.PARTICLE_SIZE}
          key={2}
          name="particulaT"
          error={errorValues["particulaT"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, particulaT: isSet(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBENT_FIELDS.SBET}
          key={3}
          name="sBet"
          error={errorValues["sBet"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                sBet: isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBENT_FIELDS.VBET}
          key={4}
          name="vBet"
          error={errorValues["vBet"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {...previousState, vBet: isPositive(value)};
            });
          }}
        />,
        <FormNumericField
          placeholder={ADSORBENT_FIELDS.PH}
          key={5}
          name="pHCargaCero"
          error={errorValues["pHCargaCero"]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                pHCargaCero: inRange(value, 1, 14),
              };
            });
          }}
        />,
        <FormTextField
          placeholder={ADSORBATE_FIELDS.FORMULA}
          key={6}
          name="formula"
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.IMPURITIES}
          key={7}
          name="impurezas"
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.SOURCE}
          key={8}
          name="origenMuestra"
        />,
        <FormTextField
          placeholder={ADSORBENT_FIELDS.SPECIES_NAME}
          key={9}
          name="nombreEspecie"
        />,
        <FormBigTextField
          placeholder={ADSORBENT_FIELDS.NOTES}
          key={10}
          name="observaciones"
        />,
      ]}
    />
  );
};
