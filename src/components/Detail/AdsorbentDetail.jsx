import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {SectionHeader} from "./SectionHeader";
import {capitalizeFirstLetter} from "../../utils/capitalize";
import {Label} from "./Label";
import {SBetLabel} from "./SBetLabel";
import {VBetLabel} from "./VBetLabel";

export const AdsorbentDetail = ({adsorbent}) => {
  return (
    <>
      <PageTitle title={capitalizeFirstLetter(adsorbent.nombre)} />
      <SectionHeader>Características</SectionHeader>
      <Label label={"Tamaño de partícula"} value={adsorbent.particulaT} />
      <SBetLabel value={adsorbent.sBet} />
      <VBetLabel value={adsorbent.vBet} />
      <Label label={"pH (carga cero)"} value={adsorbent.pHCargaCero} />
    </>
  );
};
