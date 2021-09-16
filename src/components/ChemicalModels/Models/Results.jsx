import {ResultsTitle} from "../ResultsTitle";
import {ThomasResultFields} from "./ThomasResultFields";
import React from "react";
import {ResultsContainer} from "./ModelsStyles";
import {PlotFrame, DataFrame, Title, DataFramesWrapper} from "./ModelsStyles";
import {appColors} from "../../../common/styles";

export const Results = ({responses, inputFields, plot}) => {
  const colors = [appColors.primary, appColors.red, appColors.green];
  return (
    <ResultsContainer>
      <DataFramesWrapper>
        <DataFrame>
          <Title>Datos de entrada</Title>
          {inputFields}
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
        {plot}
      </PlotFrame>
    </ResultsContainer>
  );
};
