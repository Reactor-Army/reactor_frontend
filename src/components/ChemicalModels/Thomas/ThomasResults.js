import React from "react";
import {MODEL_UNITS} from "../../../common/fields";
import {ResultsField} from "../Styles";

export const ThomasResults = ({kth, q0}) => {
  return (
    <>
      <ResultsField>
        Constante de Thomas (Kth): {kth} ({MODEL_UNITS.KTH})
      </ResultsField>
      <ResultsField>
        Concentración máxima soluto (q0): {q0} ({MODEL_UNITS.Q0})
      </ResultsField>
    </>
  );
};
