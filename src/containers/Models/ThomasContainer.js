import React, {useState} from "react";
import {PageTitle} from "../../common/PageTitle";
import {thomas} from "../../services/models";
import {ThomasModelForm} from "../../components/ChemicalModels/Thomas/ThomasModelForm";
import {ThomasResults} from "../../components/ChemicalModels/Thomas/ThomasResults";

export const ThomasContainer = () => {
  const [response, setResponse] = useState(null);
  const onSubmit = async (file, values) => {
    const apiResponse = await thomas(file, values);
    setResponse(apiResponse);
  };

  return (
    <>
      <PageTitle title={"Thomas"} />
      <ThomasModelForm onSubmit={onSubmit} />
      {response && (
        <ThomasResults
          kth={response.constanteThomas}
          q0={response.concentracionMaximaSoluto}
        />
      )}
    </>
  );
};
