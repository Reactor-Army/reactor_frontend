import {ThomasModelPlot} from "../ChemicalModels/Models/Plots/ThomasModelPlot";
import React from "react";
import {modelResultToComponent} from "../../utils/modelResultsToComponentFormat";
import {MODEL_ALIAS} from "../../common/constants";
import {AdamsBohartModelPlot} from "../ChemicalModels/Models/Plots/AdamsBohartModelPlot";
import {YoonNelsonModelPlot} from "../ChemicalModels/Models/Plots/YoonNelsonModelPlot";

export const Plot = ({curve, baseLine}) => {
  const plotComponentsByModel = {
    [MODEL_ALIAS.THOMAS]: ThomasModelPlot,
    [MODEL_ALIAS.ADAMS_BOHART]: AdamsBohartModelPlot,
    [MODEL_ALIAS.YOON_NELSON]: YoonNelsonModelPlot,
  };
  const PlotComponent = plotComponentsByModel[curve.modelo.modelo];
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
