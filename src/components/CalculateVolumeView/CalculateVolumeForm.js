import React, {useState} from "react";
import {Form} from "../Form/Form";
import {FormNumericField} from "../Form/Fields/FormFields";
import {CalculateVolumeFormContainer} from "./Styles";
import {isPositive, isSet} from "../Form/Validation/formValidations";
import {allNullKeys} from "../../utils/allNullKeys";

const initial = {
  caudal: "",
  concentracionInicial: "",
  concentracionFinal: "",
};

export const CalculateVolumeForm = () => {
  const [errorValues, setErrorValues] = useState(allNullKeys(initial));
  // eslint-disable-next-line no-unused-vars
  const [values, _setValues] = useState(initial);
  const errorsSet = Object.keys(errorValues).some((key) => {
    return errorValues[key] !== undefined;
  });
  return (
    <CalculateVolumeFormContainer>
      <Form
        initialValues={values}
        errors={errorsSet}
        buttonLabel={"Calcular"}
        fields={[
          <FormNumericField
            key={0}
            name={"caudal"}
            placeholder={"Caudal"}
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
            placeholder={"Concentración inicial"}
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
            placeholder={"Concentración final"}
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
