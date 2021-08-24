import {Form} from "../../components/Form/Form";
import {filterBlank} from "../../components/Create/validations";
import {
  FileField,
  FormNumericField,
} from "../../components/Form/Fields/FormFields";
import {THOMAS_FIELDS, THOMAS_REQUEST_FIELDS} from "../../common/fields";
import {
  isPositive,
  isSet,
} from "../../components/Form/Validation/formValidations";
import React, {useState} from "react";
import {THOMAS_FORM_INITIAL_VALUES} from "../../common/constants";
import {PageTitle} from "../../common/PageTitle";
import {thomas} from "../../services/models";
import {Paragraph} from "../../components/HomePage/Styles";

export const ThomasContainer = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const onSubmit = async (values) => {
    const apiResponse = await thomas(file, values);
    setResponse(apiResponse);
  };

  const buttonLabel = "Calcular";
  const [errorValues, setErrorValues] = useState({});
  const onFileChange = (event) => {
    setFile(event.currentTarget.files[0]);
  };

  return (
    <>
      <PageTitle title={"Thomas"} />
      <FileField onChange={onFileChange} />
      <Form
        initialValues={THOMAS_FORM_INITIAL_VALUES}
        onSubmit={onSubmit}
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
                  [THOMAS_REQUEST_FIELDS.FLOW]:
                    isSet(value) || isPositive(value),
                };
              });
            }}
          />,
          <FormNumericField
            placeholder={THOMAS_FIELDS.INITIAL_CONCENTRATION}
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
            placeholder={THOMAS_FIELDS.ADSORBENT_MASS}
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
      {response && (
        <div>
          <Paragraph>
            Constante de Thomas (Kth): {response.constanteThomas}
          </Paragraph>
          <Paragraph>
            Concentración máxima soluto (q0):{" "}
            {response.concentracionMaximaSoluto}
          </Paragraph>
        </div>
      )}
    </>
  );
};
