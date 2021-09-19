import React, {useState} from "react";
import {Form, FORM_LAYOUTS} from "../Form/Form";
import {FormNumericField} from "../Form/Fields/FormFields";
import {CalculateVolumeFormContainer} from "./Styles";
import {isPositive, isSet} from "../Form/Validation/formValidations";
import {allNullKeys} from "../../utils/allNullKeys";
import {UNITS} from "../../common/fields";
import {CALCULATE_VOLUME_FORM_INITIAL_VALUES} from "../../common/constants";

export const CalculateVolumeForm = ({onSubmit, forceDisable}) => {
  const [errorValues, setErrorValues] = useState(
    allNullKeys(CALCULATE_VOLUME_FORM_INITIAL_VALUES),
  );
  const errorsSet = Object.keys(errorValues).some((key) => {
    return errorValues[key] !== undefined;
  });
  return (
    <CalculateVolumeFormContainer>
      <Form
        initialValues={CALCULATE_VOLUME_FORM_INITIAL_VALUES}
        errors={errorsSet}
        buttonLabel={"Calcular"}
        onSubmit={onSubmit}
        forceDisable={forceDisable}
        layout={FORM_LAYOUTS.SINGLE_COLUMN}
        fields={[
          <FormNumericField
            key={0}
            name={"caudal"}
            placeholder={`Caudal (${UNITS.DISCHARGE})`}
            validate={(value) => {
              setErrorValues((previousState) => {
                return {
                  ...previousState,
                  caudal: isSet(value) || isPositive(value),
                };
              });
            }}
          />,
          <FormNumericField
            key={1}
            name={"concentracionInicial"}
            error={errorValues.concentracionInicial}
            placeholder={`Conc. inicial (${UNITS.CONCENTRATION})`}
            validate={(value) => {
              setErrorValues((previousState) => {
                return {
                  ...previousState,
                  concentracionInicial: isSet(value) || isPositive(value),
                };
              });
            }}
          />,
          <FormNumericField
            key={2}
            name={"concentracionFinal"}
            placeholder={`Conc. final (${UNITS.CONCENTRATION})`}
            error={errorValues.concentracionFinal}
            validate={(value) => {
              setErrorValues((previousState) => {
                return {
                  ...previousState,
                  concentracionFinal: isSet(value) || isPositive(value),
                };
              });
            }}
          />,
        ]}
      />
    </CalculateVolumeFormContainer>
  );
};
