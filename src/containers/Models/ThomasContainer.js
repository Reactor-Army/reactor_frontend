import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {thomas} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Thomas/ThomasModelForm";
import {ThomasResults} from "../../components/ChemicalModels/Thomas/ThomasResults";
import {
  THOMAS_REQUEST_FIELDS,
  THOMAS_RESPONSE_FIELDS,
} from "../../common/fields";
import {ThomasModelPlot} from "../../components/ChemicalModels/Thomas/ThomasModelPlot/ThomasModelPlot";
import {FormLayout} from "../../components/Form/FormStyles";

export const ThomasContainer = () => {
  const [response, setResponse] = useState(null);
  const onSubmit = async (file, values) => {
    const apiResponse = await thomas(file, values);

    setResponse({
      F: values[THOMAS_REQUEST_FIELDS.FLOW],
      W: values[THOMAS_REQUEST_FIELDS.ADSORBENT_MASS],
      C0: values[THOMAS_REQUEST_FIELDS.INITIAL_CONCENTRATION],
      Kth: apiResponse[THOMAS_RESPONSE_FIELDS.KTH],
      q0: apiResponse[THOMAS_RESPONSE_FIELDS.Q0],
      points: apiResponse[THOMAS_RESPONSE_FIELDS.OBSERVATIONS].map((x) => [
        x.x,
        x.y,
      ]),
    });
  };

  return (
    <>
      <PageTitle title={"Modelo de Thomas"} />
      <FormLayout>
        <ThomasModelForm onSubmit={onSubmit} />
        {response && (
          <>
            <ThomasModelPlot {...response} />
            <ThomasResults kth={response.Kth} q0={response.q0} />
          </>
        )}
      </FormLayout>
    </>
  );
};
