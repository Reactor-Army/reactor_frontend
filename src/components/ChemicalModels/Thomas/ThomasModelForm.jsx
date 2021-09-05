import {FormNumericField} from "../../Form/Fields/FormFields";
import {Form} from "../../Form/Form";
import {THOMAS_FORM_INITIAL_VALUES} from "../../../common/constants";
import {filterBlank} from "../../Create/validations";
import {
  MODEL_UNITS,
  THOMAS_FIELDS,
  THOMAS_REQUEST_FIELDS,
} from "../../../common/fields";
import {isPositive, isSet} from "../../Form/Validation/formValidations";
import React, {useState} from "react";

export const ThomasModelForm = ({forceDisable, onSubmit}) => {
  const [errorValues, setErrorValues] = useState({});

  const _onSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      singleColumn={true}
      initialValues={THOMAS_FORM_INITIAL_VALUES}
      onSubmit={_onSubmit}
      buttonLabel={"Calcular"}
      errors={filterBlank(errorValues)}
      forceDisable={forceDisable}
      fields={[
        <FormNumericField
          placeholder={`${THOMAS_FIELDS.FLOW} [${MODEL_UNITS.FLOW}]`}
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
          placeholder={`${THOMAS_FIELDS.INITIAL_CONCENTRATION} [${MODEL_UNITS.INITIAL_CONCENTRATION}]`}
          key={2}
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
          placeholder={`${THOMAS_FIELDS.ADSORBENT_MASS} [${MODEL_UNITS.ADSORBENT_MASS}]`}
          key={3}
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
