import React from "react";
import {SystemTitle as SystemTitleContainer} from "../ChemicalModels/Models/ModelsStyles";

export const SystemTitle = ({response}) => {
  const system = response.curva.sistema;
  return (
    <SystemTitleContainer>
      {system.adsorbato.nombreIUPAC} - {system.adsorbente.nombre}
    </SystemTitleContainer>
  );
};
