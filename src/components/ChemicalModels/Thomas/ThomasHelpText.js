import {HelpText} from "../ChemicalModelStyles";
import React from "react";

export const ThomasHelpText = () => {
  return (
    <HelpText>
      Calcula la constante de Thomas (Kth) y la concentración máxima del soluto
      (q0) en base a un archivo de observaciones. Las observaciones deben ser
      subidas como un archivo CSV (exportable desde Excel u otro software
      similar de planillas de cálculo), con dos columnas:
      &quot;volumenEfluente&quot; medido en mililitros y &quot;C/C0&quot;.
    </HelpText>
  );
};