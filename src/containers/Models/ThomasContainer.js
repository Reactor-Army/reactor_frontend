import {Form} from "../../components/Form/Form";
import {filterBlank} from "../../components/Create/validations";
import {FormNumericField} from "../../components/Form/Fields/FormFields";
import {THOMAS_FIELDS, THOMAS_REQUEST_FIELDS} from "../../common/fields";
import {
  isPositive,
  isSet,
} from "../../components/Form/Validation/formValidations";
import React, {useState} from "react";
import {THOMAS_FORM_INITIAL_VALUES} from "../../common/constants";

export const ThomasContainer = () => {
  const onSubmit = () => {};
  const buttonLabel = "Calcular";
  const [errorValues, setErrorValues] = useState({});
  return (
    <Form
      initialValues={THOMAS_FORM_INITIAL_VALUES}
      onSubmit={onSubmit}
      title={"Thomas"}
      buttonLabel={buttonLabel}
      errors={filterBlank(errorValues)}
      fields={[
        <FormNumericField
          placeholder={THOMAS_FIELDS.FLOW}
          key={1}
          name={THOMAS_REQUEST_FIELDS.FLOW}
          error={errorValues[THOMAS_REQUEST_FIELDS.FLOW]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [THOMAS_REQUEST_FIELDS.FLOW]: isSet(value) || isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={THOMAS_FIELDS.INITIAL_CONCENTRATION}
          key={1}
          name={THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION}
          error={errorValues[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={THOMAS_FIELDS.ADSORBENT_MASS}
          key={1}
          name={THOMAS_REQUEST_FIELDS.ADSORBENT_MASS}
          error={errorValues[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [THOMAS_REQUEST_FIELDS.ADSORBENT_MASS]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
      ]}
    />
  );
};
