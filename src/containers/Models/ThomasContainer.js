import React, {useState} from "react";
import {ModelTitle} from "../../common/ModelTitle";
import {Row} from "../../common/styles";
import {thomas} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Thomas/ThomasModelForm";
import {
  THOMAS_REQUEST_FIELDS,
  THOMAS_RESPONSE_FIELDS,
} from "../../common/fields";
import {ThomasPageLayout} from "../../components/ChemicalModels/Thomas/ThomasStyles";
import {ThomasHelpText} from "../../components/ChemicalModels/Thomas/ThomasHelpText";
import {ThomasResults} from "../../components/ChemicalModels/Thomas/ThomasResults";
import {ErrorModal} from "../../components/ChemicalModels/ErrorModal";
import {FileUpload} from "../../components/ChemicalModels/FileUpload";

export const ThomasContainer = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [files, setNewFiles] = useState([]);

  const onSubmit = async (values) => {
    let apiResponse;
    try {
      apiResponse = await thomas(files[0], values);
    } catch (e) {
      setError(e.response.data.message);
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
      <Row>
        <ModelTitle title={"Modelo de Thomas"} />
      </Row>
      <ThomasHelpText />
      <ThomasPageLayout>
        <FileUpload files={files} setNewFiles={setNewFiles} />
        <ThomasModelForm onSubmit={onSubmit} />
        {response && <ThomasResults response={response} />}
      </ThomasPageLayout>
      <ErrorModal closeModal={() => setError(null)} error={error} />
    </>
  );
};
