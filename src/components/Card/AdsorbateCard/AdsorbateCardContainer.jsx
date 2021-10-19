import {AdsorbateCard} from "./AdsorbateCard";
import {appColors} from "../../../common/styles";
import {capitalize} from "../../../common/FormatUtils";
import React from "react";

export const AdsorbateCardContainer = ({adsorbate}) => {
  const formatAdsorbateName = (name, nameIUPAC) => {
    return nameIUPAC ? `${nameIUPAC} (${name}) ` : name;
  };

  const {
    nombreIon,
    nombreIUPAC,
    cargaIon,
    radioIonico,
    limiteVertido,
    formula,
    cargaIonFormula,
    id,
  } = adsorbate;
  return (
    <AdsorbateCard
      headerBackgroundColor={appColors.adsorbateCardHeader}
      bodyBackgroundColor={appColors.pageBackground}
      header={capitalize(formatAdsorbateName(nombreIon, nombreIUPAC))}
      ionCharge={cargaIon}
      ionRadius={radioIonico}
      dischargeLimit={limiteVertido}
      formula={formula}
      ionChargeFormula={cargaIonFormula}
      id={id}
    />
  );
};
