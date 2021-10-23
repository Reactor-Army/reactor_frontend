import {Results} from "../Models/Results";
import {ThomasInputFields} from "../Models/ThomasInputFields";
import {DataFrame, Title} from "../Models/ModelsStyles";
import {ThomasResultFields} from "../Models/ThomasResultFields";
import {ThomasModelPlot} from "../Models/Plots/ThomasModelPlot";
import React from "react";
import {generateEquation, thomasCoefficients} from "../Models/equations";

const thomasEquation = (data) => {
  const template = "$$\\frac{C}{C0} = \\frac{1}{1 + e^{first-secondV_{ef}}}$$";
  return generateEquation(template, thomasCoefficients(data));
};

export const ThomasResults = ({responses, colors}) => {
  return (
    <Results
      inputFields={<ThomasInputFields {...responses[0]} />}
      resultsInfo={responses.map((response, index) => (
        <DataFrame key={index}>
          <Title color={colors[index % colors.length]}>
            Resultados gráfico {++index}
          </Title>
          <ThomasResultFields
            kth={response.Kth}
            q0={response.q0}
            R2={response.R2}
            equation={thomasEquation(response)}
          />
        </DataFrame>
      ))}
      plot={
        <ThomasModelPlot
          points={responses.map((response) => response.points)}
          expressions={responses}
        />
      }
    />
  );
};
