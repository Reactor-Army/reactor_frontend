import {Modal} from "../Modal";
import React, {useState} from "react";
import {Form, FORM_LAYOUTS} from "../../Form/Form";
import {FormTextField} from "../../Form/Fields/FormFields";
import {MODEL_FORM_INITIAL_VALUES} from "../../../common/constants";
import {
  MODEL_PERSISTENCE_FIELDS,
  MODEL_PERSISTENCE_REQUEST_FIELDS,
} from "../../../common/fields";
import {filterBlank} from "../../CustomForms/validations";
import {isSet} from "../../Form/Validation/formValidations";
import {Title, FormWrapper} from "./SaveModelResultsModalStyles";
//FormSelectorField

export const SaveModelResultsModal = ({closeModal, open}) => {
  const [errorValues, setErrorValues] = useState({});
  const onSubmit = async (values) => {
    alert(values);
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Title>Guardar Resultado</Title>
      <FormWrapper>
        <Form
          layout={FORM_LAYOUTS.SINGLE_COLUMN}
          singleColumn={true}
          initialValues={MODEL_FORM_INITIAL_VALUES}
          onSubmit={onSubmit}
          buttonLabel="Aceptar"
          errors={filterBlank(errorValues)}
          forceDisable={errorValues}
          fields={[
            <FormTextField
              placeholder={MODEL_PERSISTENCE_FIELDS.NAME}
              key={1}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.NAME}
              error={errorValues[MODEL_PERSISTENCE_REQUEST_FIELDS.NAME]}
              validate={(value) => {
                setErrorValues((previousState) => {
                  return {
                    ...previousState,
                    [MODEL_PERSISTENCE_REQUEST_FIELDS.NAME]: isSet(value),
                  };
                });
              }}
            />,
          ]}
        />
      </FormWrapper>
    </Modal>
  );
};
