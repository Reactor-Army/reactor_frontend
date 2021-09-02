import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./ThomasModelPlot/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import {ThomasInputFields} from "./ThomasInputFields";
import React from "react";
import {ThomasResultsContainer} from "./ThomasStyles";
import {PlotFrame, DataFrame, Title, DataFramesWrapper} from "./ThomasStyles";

export const ThomasResults = ({response}) => {
  return (
    <ThomasResultsContainer>
      <DataFramesWrapper>
        <DataFrame>
          <Title>Datos de entrada</Title>
          <ThomasInputFields kth={response.Kth} q0={response.q0} />
        </DataFrame>
        <DataFrame>
          <Title>Resultados de salida</Title>
          <ThomasResultFields kth={response.Kth} q0={response.q0} />
        </DataFrame>
      </DataFramesWrapper>
      <PlotFrame>
        <ResultsTitle />
        <ThomasModelPlot points={[response.points]} expressions={[response]} />
      </PlotFrame>
    </ThomasResultsContainer>
  );
};
