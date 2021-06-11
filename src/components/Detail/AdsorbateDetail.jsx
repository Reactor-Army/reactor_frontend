import React from "react";
import {SectionHeader} from "./SectionHeader";
import {Label} from "./Label";
import {FormulaLabel} from "../Card/AdsorbateCard/FormulaLabel";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {spillLimit} from "../../common/formatting/spillLimit";
import {DetailHeader} from "./DetailHeader";

export const AdsorbateDetail = ({adsorbate}) => {
  return (
    <>
      <DetailHeader
        title={capitalizeFirstLetter(adsorbate.nombreIUPAC)}
        id={adsorbate.id}
      />
      <SectionHeader>Características</SectionHeader>
      <Label label={"Nombre común"} value={adsorbate.nombreIon} />
      <Label label={"Carga iónica"} value={adsorbate.cargaIon} />
      <Label label={"Radio iónico"} value={`${adsorbate.radioIonico} Å`} />
      <Label
        label={"Límite de vertido (Ley 24051)"}
        value={spillLimit(adsorbate.limiteVertido)}
      />
      <Label
        label={"Masa molar"}
        value={adsorbate.masaMolar ? `${adsorbate.masaMolar} g/mol` : "-"}
      />

      <SectionHeader>Fórmula</SectionHeader>
      <FormulaLabel
        formula={adsorbate.formula}
        ionChargeFormula={adsorbate.cargaIonFormula}
      />
    </>
  );
};
