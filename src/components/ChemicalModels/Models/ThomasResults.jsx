import {ResultsTitle} from "../ResultsTitle";
import {ThomasModelPlot} from "./Plots/ThomasModelPlot";
import {ThomasResultFields} from "./ThomasResultFields";
import {ThomasInputFields} from "./ThomasInputFields";
import React from "react";
import {ThomasResultsContainer} from "./ModelsStyles";
import {PlotFrame, DataFrame, Title, DataFramesWrapper} from "./ModelsStyles";
import {appColors} from "../../../common/styles";

export const ThomasResults = ({responses, inputValues}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
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
            <Title color={colors[index % colors.length]}>
              Resultados gráfico {++index}
            </Title>
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
