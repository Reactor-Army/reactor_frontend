import {Results} from "../Models/Results";
import {YoonNelsonInputFields} from "../Models/YoonNelsonInputFields";
import {ButtonWrapper, DataFrame, Title} from "../Models/ModelsStyles";
import {YoonNelsonResultFields} from "../Models/YoonNelsonResultFields";
import {YoonNelsonModelPlot} from "../Models/Plots/YoonNelsonModelPlot";
import {Button} from "../../Button/Button";
import React from "react";
import {generateEquation, yoonNelsonCoefficients} from "../Models/equations";

const yoonNelsonEquation = (data) => {
  const exponential = "e^{firstV{ef}-second}";
  const template = `$$\\frac{C}{C0} = \\frac{${exponential}}{1 + ${exponential}}$$`;
  return generateEquation(template, yoonNelsonCoefficients(data));
};

export const YoonNelsonResults = ({
  inputValues,
  responses,
  colors,
  onClick,
}) => {
  return (
    <>
      <Results
        inputFields={
          <YoonNelsonInputFields F={inputValues.caudalVolumetrico} />
        }
        resultsInfo={responses.map((response, index) => (
          <DataFrame key={index}>
            <Title color={colors[index % colors.length]}>
              Resultados gráfico {++index}
            </Title>
            <YoonNelsonResultFields
              Kyn={response.Kyn}
              t={response.t}
              R2={response.R2}
              equation={yoonNelsonEquation(response)}
            />
          </DataFrame>
        ))}
        plot={
          <YoonNelsonModelPlot
            points={responses.map((response) => response.points)}
            expressions={responses}
          />
        }
      />
      <ButtonWrapper>
        <Button size="medium" text="Volver a graficar" onClick={onClick} />
      </ButtonWrapper>
    </>
  );
};
