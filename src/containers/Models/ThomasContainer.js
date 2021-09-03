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

const INITIAL_ERROR = {
  message: null,
  index: null,
};

export const ThomasContainer = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(INITIAL_ERROR);
  const [files, setNewFiles] = useState([]);

  const submitFile = async (file, values, index) => {
    let apiResponse;
    try {
      apiResponse = await thomas(file, values);
    } catch (e) {
      setError({
        message: e.response.data.message,
        index: index,
      });
      setResponses([]);
      return;
    }
    setResponses((prev) => [
      ...prev,
      {
        F: values[THOMAS_REQUEST_FIELDS.FLOW],
        W: values[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
        C0: values[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION],
        Kth: apiResponse[THOMAS_RESPONSE_FIELDS.KTH],
        q0: apiResponse[THOMAS_RESPONSE_FIELDS.Q0],
        points: apiResponse[
          THOMAS_RESPONSE_FIELDS.OBSERVATIONS
        ].map((observation) => [observation.x, observation.y]),
      },
    ]);
    setError(INITIAL_ERROR);
  };

  const onSubmit = async (values) => {
    for (let i = 0; i < files.length; i++) {
      if (error.message) {
        break;
      }
      await submitFile(files[i], values, i + 1);
    }
  };

  return (
    <>
      <Row>
        <ModelTitle title={"Modelo de Thomas"} />
      </Row>
      <ThomasHelpText />
      <ThomasPageLayout>
        <FileUpload files={files} setNewFiles={setNewFiles} />
        <ThomasModelForm
          forceDisable={files.length === 0}
          onSubmit={onSubmit}
        />
        {responses.length && responses.length === files.length && (
          <ThomasResults responses={responses} />
        )}
      </ThomasPageLayout>
      <ErrorModal closeModal={() => setError(INITIAL_ERROR)} error={error} />
    </>
  );
};
