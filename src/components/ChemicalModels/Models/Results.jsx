import {ResultsTitle} from "../ResultsTitle";
import React from "react";
import {ResultsContainer} from "./ModelsStyles";
import {
  PlotFrame,
  DataFrame,
  DataFrameContent,
  Title,
  DataFramesWrapper,
} from "./ModelsStyles";

export const Results = ({inputFields, resultsInfo, plot}) => {
  return (
    <ResultsContainer>
      <DataFramesWrapper>
        <DataFrame>
          <Title>Datos de entrada</Title>
          <DataFrameContent>{inputFields}</DataFrameContent>
        </DataFrame>
        {resultsInfo}
      </DataFramesWrapper>
      <PlotFrame>
        <ResultsTitle />
        {plot}
      </PlotFrame>
    </ResultsContainer>
  );
};
