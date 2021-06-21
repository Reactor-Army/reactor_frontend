import React from "react";
import {SectionHeader} from "./SectionHeader";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {Label} from "./Label";
import {SBetLabel} from "./SBetLabel";
import {VBetLabel} from "./VBetLabel";
import {DetailHeaderAdsorbent} from "./DetailHeaderAdsorbent";

export const AdsorbentDetail = ({adsorbent}) => {
  return (
    <>
      <DetailHeaderAdsorbent
        title={capitalizeFirstLetter(adsorbent.nombre)}
        id={adsorbent.id}
      />
      <SectionHeader>Características</SectionHeader>
      <Label label={"Tamaño de partícula"} value={adsorbent.particulaT} />
      <SBetLabel value={adsorbent.sBet} />
      <VBetLabel value={adsorbent.vBet} />
      <Label label={"pH (carga cero)"} value={adsorbent.pHCargaCero} />
      <Label label={"Impurezas"} value={adsorbent.impurezas} />
      <Label label={"Origen de la muestra"} value={adsorbent.origenMuestra} />
      <Label label={"Fórmula"} value={adsorbent.formula} />
      <Label label={"Nombre de la especie"} value={adsorbent.nombreEspecie} />
    </>
  );
};
