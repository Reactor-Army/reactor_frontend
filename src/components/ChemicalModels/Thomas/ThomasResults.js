import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./ThomasModelPlot/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import React from "react";
import {ThomasResultsContainer} from "./ThomasStyles";

export const ThomasResults = ({responses}) => {
  return (
    <ThomasResultsContainer>
      <ResultsTitle />
      <ThomasModelPlot
        points={responses.map((response) => response.points)}
        expressions={responses}
      />
      {responses.map((response, index) => (
        <ThomasResultFields key={index} kth={response.Kth} q0={response.q0} />
      ))}
    </ThomasResultsContainer>
  );
};
