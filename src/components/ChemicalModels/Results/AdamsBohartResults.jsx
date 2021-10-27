import {Results} from "../Models/Results";
import {AdamsBohartInputFields} from "../Models/AdamsBohartInputFields";
import {DataFrame, Title} from "../Models/ModelsStyles";
import {AdamsBohartResultFields} from "../Models/AdamsBohartResultFields";
import {AdamsBohartModelPlot} from "../Models/Plots/AdamsBohartModelPlot";
import React from "react";
import {adamsBohartCofficients, generateEquation} from "../Models/equations";
import {Row} from "../../../common/styles";
import {ModelTitle} from "../../../common/ModelTitle";

const adamsEquation = (data) => {
  const template = `$$\\frac{C}{C0} = e^{firstV_{ef}-second}$$`;
  return generateEquation(template, adamsBohartCofficients(data));
};

export const AdamsBohartResults = ({responses, colors}) => {
  return (
    <>
      <Row>
        <ModelTitle title={"Modelo de Adams-Bohart"} />
      </Row>
      <Results
        inputFields={<AdamsBohartInputFields {...responses[0]} />}
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
    </>
  );
};
