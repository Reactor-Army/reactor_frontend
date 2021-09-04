import {HelpText} from "../ChemicalModelStyles";
import React from "react";
import {settings} from "../../../config/settings";

export const ThomasHelpText = () => {
  return (
    <HelpText>
      Calcula la constante de Thomas (Kth) y la concentración máxima del soluto
      (q0) en base a un archivo de observaciones. Las observaciones deben ser
      subidas como un archivo CSV (exportable desde Excel u otro software
      similar de planillas de cálculo), con dos columnas:
      &quot;volumenEfluente&quot; medido en mililitros y &quot;C/C0&quot;. Se
      pueden subir varios archivos CSV, y el modelo se calculará para cada
      archivo de observaciones de manera independiente, y se graficarán y
      mostraran resultados para todos al mismo tiempo. La máxima cantidad de
      modelos que se pueden ejecutar son {settings.MAX_MODELS}.
    </HelpText>
  );
};
