import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {thomas} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Thomas/ThomasModelForm";
import {
  THOMAS_REQUEST_FIELDS,
  THOMAS_RESPONSE_FIELDS,
} from "../../common/fields";
import {ThomasPageLayout} from "../../components/ChemicalModels/Thomas/Styles";
import {ThomasHelpText} from "../../components/ChemicalModels/Thomas/ThomasHelpText";
import {Paragraph} from "../../components/HomePage/Styles";
import {ThomasResults} from "../../components/ChemicalModels/Thomas/ThomasResults";

export const ThomasContainer = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (file, values) => {
    let apiResponse;
    try {
      apiResponse = await thomas(file, values);
    } catch (e) {
      setError(
        "Ocurrió un error ejecutando el modelo: " + e.response.data.message,
      );
      setResponse(null);
      return;
    }

    setResponse({
      F: values[THOMAS_REQUEST_FIELDS.FLOW],
      W: values[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
      C0: values[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION],
      Kth: apiResponse[THOMAS_RESPONSE_FIELDS.KTH],
      q0: apiResponse[THOMAS_RESPONSE_FIELDS.Q0],
      points: apiResponse[
        THOMAS_RESPONSE_FIELDS.OBSERVATIONS
      ].map((observation) => [observation.x, observation.y]),
    });
    setError(null);
  };

  return (
    <>
      <PageTitle title={"Modelo de Thomas"} />
      <ThomasHelpText />
      <ThomasPageLayout>
        <ThomasModelForm onSubmit={onSubmit} />
        {response && <ThomasResults response={response} />}
        {error && <Paragraph>{error}</Paragraph>}
      </ThomasPageLayout>
    </>
  );
};
