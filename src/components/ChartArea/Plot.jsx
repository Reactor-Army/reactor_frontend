import {ThomasModelPlot} from "../ChemicalModels/Models/Plots/ThomasModelPlot";
import React from "react";
import {modelResultToComponent} from "../../utils/modelResultsToComponentFormat";

export const Plot = ({curve, baseLine}) => {
  const PlotComponent = ThomasModelPlot;
  const responses = [
    modelResultToComponent(curve)[0],
    modelResultToComponent(baseLine)[0],
  ];
  return (
    <PlotComponent
      points={responses.map((response) => response.points)}
      expressions={responses}
    />
  );
};
