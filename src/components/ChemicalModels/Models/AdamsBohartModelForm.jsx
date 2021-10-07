import {FormNumericField} from "../../Form/Fields/FormFields";
import {Form, FORM_LAYOUTS} from "../../Form/Form";
import {ADAMS_BOHART_FORM_INITIAL_VALUES} from "../../../common/constants";
import {filterBlank} from "../../CustomForms/validations";
import {
  MODEL_UNITS,
  ADAMS_BOHART_REQUEST_FIELDS,
  ADAMS_BOHART_FIELDS,
} from "../../../common/fields";
import {isPositive, isSet} from "../../Form/Validation/formValidations";
import React, {useState} from "react";

export const AdamsBohartModelForm = ({forceDisable, onSubmit}) => {
  const [errorValues, setErrorValues] = useState({});

  const _onSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      layout={FORM_LAYOUTS.SINGLE_COLUMN}
      singleColumn={true}
      initialValues={ADAMS_BOHART_FORM_INITIAL_VALUES}
      onSubmit={_onSubmit}
      buttonLabel={"Calcular"}
      errors={filterBlank(errorValues)}
      forceDisable={forceDisable}
      fields={[
        <FormNumericField
          placeholder={`${ADAMS_BOHART_FIELDS.FLOW} [${MODEL_UNITS.FLOW}]`}
          key={1}
          name={ADAMS_BOHART_REQUEST_FIELDS.FLOW}
          error={errorValues[ADAMS_BOHART_REQUEST_FIELDS.FLOW]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADAMS_BOHART_REQUEST_FIELDS.FLOW]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADAMS_BOHART_FIELDS.INITIAL_CONCENTRATION} [${MODEL_UNITS.INITIAL_CONCENTRATION}]`}
          key={2}
          name={ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION}
          error={errorValues[ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADAMS_BOHART_REQUEST_FIELDS.INITIAL_CONCENTRATION]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADAMS_BOHART_FIELDS.REACTOR_HEIGHT} [${MODEL_UNITS.REACTOR_HEIGHT}]`}
          key={3}
          name={ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT}
          error={errorValues[ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADAMS_BOHART_REQUEST_FIELDS.REACTOR_HEIGHT]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
        <FormNumericField
          placeholder={`${ADAMS_BOHART_FIELDS.LIQUID_VELOCITY} [${MODEL_UNITS.LIQUID_VELOCITY}]`}
          key={4}
          name={ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY}
          error={errorValues[ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [ADAMS_BOHART_REQUEST_FIELDS.LIQUID_VELOCITY]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
      ]}
    />
  );
};
