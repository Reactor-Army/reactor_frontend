import {FormNumericField} from "../../Form/Fields/FormFields";
import {Form, FORM_LAYOUTS} from "../../Form/Form";
import {YOON_NELSON_FORM_INITIAL_VALUES} from "../../../common/constants";
import {filterBlank} from "../../CustomForms/validations";
import {
  MODEL_UNITS,
  COMMON_MODEL_FIELDS,
  YOON_NELSON_REQUEST_FIELDS,
} from "../../../common/fields";
import {isPositive, isSet} from "../../Form/Validation/formValidations";
import React, {useState} from "react";

export const YoonNelsonModelForm = ({forceDisable, onSubmit}) => {
  const [errorValues, setErrorValues] = useState({});

  const _onSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      layout={FORM_LAYOUTS.SINGLE_COLUMN}
      singleColumn={true}
      initialValues={YOON_NELSON_FORM_INITIAL_VALUES}
      onSubmit={_onSubmit}
      buttonLabel={"Calcular"}
      errors={filterBlank(errorValues)}
      forceDisable={forceDisable}
      fields={[
        <FormNumericField
          placeholder={`${COMMON_MODEL_FIELDS.FLOW} [${MODEL_UNITS.FLOW}]`}
          key={1}
          name={YOON_NELSON_REQUEST_FIELDS.FLOW}
          error={errorValues[YOON_NELSON_REQUEST_FIELDS.FLOW]}
          validate={(value) => {
            setErrorValues((previousState) => {
              return {
                ...previousState,
                [YOON_NELSON_REQUEST_FIELDS.FLOW]:
                  isSet(value) || isPositive(value),
              };
            });
          }}
        />,
      ]}
    />
  );
};
