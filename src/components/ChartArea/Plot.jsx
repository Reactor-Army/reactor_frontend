import {ThomasModelPlot} from "../ChemicalModels/Models/Plots/ThomasModelPlot";
import React from "react";

export const Plot = ({curve, baseLine}) => {
  const PlotComponent = ThomasModelPlot;
  const responses = [curve.response, baseLine.response];
  return (
    <PlotComponent
      points={responses.map((response) => response.points)}
      expressions={responses}
    />
  );
};
