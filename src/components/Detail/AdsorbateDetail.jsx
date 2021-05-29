import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {SectionHeader} from "./SectionHeader";
import {Label} from "./Label";
import {FormulaLabel} from "../Card/AdsorbateCard/FormulaLabel";
import {capitalizeFirstLetter} from "../../utils/capitalize";

export const AdsorbateDetail = ({adsorbate}) => {
  return (
    <>
      <PageTitle title={capitalizeFirstLetter(adsorbate.nombreIUPAC)} />
      <SectionHeader>Características</SectionHeader>
      <Label label={"Nombre común"} value={adsorbate.nombreIon} />
      <Label label={"Carga iónica"} value={adsorbate.cargaIon} />
      <Label label={"Radio iónico"} value={`${adsorbate.radioIonico} Å`} />
      <Label
        label={"Límite de vertido (Ley 24051)"}
        value={`${adsorbate.limiteVertido} L`}
      />
      <SectionHeader>Fórmula</SectionHeader>
      <FormulaLabel
        formula={adsorbate.formula}
        ionChargeFormula={adsorbate.cargaIonFormula}
      />
    </>
  );
};
