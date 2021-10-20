import {Results} from "../Models/Results";
import {AdamsBohartInputFields} from "../Models/AdamsBohartInputFields";
import {ButtonWrapper, DataFrame, Title} from "../Models/ModelsStyles";
import {AdamsBohartResultFields} from "../Models/AdamsBohartResultFields";
import {AdamsBohartModelPlot} from "../Models/Plots/AdamsBohartModelPlot";
import {Button} from "../../Button/Button";
import React from "react";
import {adamsBohartCofficients, generateEquation} from "../Models/equations";

const adamsEquation = (data) => {
  const template = `$$\\frac{C}{C0} = e^{firstV_{ef}-second}$$`;
  return generateEquation(template, adamsBohartCofficients(data));
};

export const AdamsBohartResults = ({
  inputValues,
  responses,
  onClick,
  colors,
}) => {
  return (
    <>
      <Results
        inputFields={
          <AdamsBohartInputFields
            F={inputValues.caudalVolumetrico}
            C0={inputValues.concentracionInicial}
            Z={inputValues.alturaLechoReactor}
            U0={inputValues.velocidadLineal}
          />
        }
        resultsInfo={responses.map((response, index) => (
          <DataFrame key={index}>
            <Title color={colors[index % colors.length]}>
              Resultados gráfico {++index}
            </Title>
            <AdamsBohartResultFields
              Kab={response.Kab}
              N0={response.N0}
              R2={response.R2}
              equation={adamsEquation(response)}
            />
          </DataFrame>
        ))}
        plot={
          <AdamsBohartModelPlot
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
