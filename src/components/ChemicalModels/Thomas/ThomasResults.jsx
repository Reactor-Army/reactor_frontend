import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./ThomasModelPlot/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import {ThomasInputFields} from "./ThomasInputFields";
import React from "react";
import {ThomasResultsContainer} from "./ThomasStyles";
import {PlotFrame, DataFrame, Title, DataFramesWrapper} from "./ThomasStyles";

export const ThomasResults = ({responses, inputValues}) => {
  console.log("Input values", inputValues);
  console.log("Responses", responses);
  return (
    <ThomasResultsContainer>
      <DataFramesWrapper>
        <DataFrame>
          <Title>Datos de entrada</Title>
          <ThomasInputFields
            F={inputValues.caudalVolumetrico}
            C0={inputValues.concentracionInicial}
            W={inputValues.sorbenteReactor}
          />
        </DataFrame>
        {responses.map((response, index) => (
          <DataFrame key={index}>
            <Title>Resultados gráfico {++index}</Title>
            <ThomasResultFields kth={response.Kth} q0={response.q0} />
          </DataFrame>
        ))}
      </DataFramesWrapper>
      <PlotFrame>
        <ResultsTitle />
        <ThomasModelPlot
          points={responses.map((response) => response.points)}
          expressions={responses}
        />
      </PlotFrame>
    </ThomasResultsContainer>
  );
};
