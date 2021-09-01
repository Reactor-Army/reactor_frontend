import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./ThomasModelPlot/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import React from "react";
import {ThomasResultsContainer} from "./ThomasStyles";

export const ThomasResults = ({response}) => {
  return (
    <ThomasResultsContainer>
      <ResultsTitle />
      <ThomasModelPlot points={[response.points]} expressions={[response]} />
      <ThomasResultFields kth={response.Kth} q0={response.q0} />
    </ThomasResultsContainer>
  );
};
