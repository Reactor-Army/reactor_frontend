import {AdsorbentCard} from "./AdsorbentCard";
import {appColors} from "../../../common/styles";
import React from "react";

export const AdsorbentCardContainer = ({adsorbent}) => {
  const {nombre, particulaT, sBet, vBet, pHCargaCero, id} = adsorbent;
  return (
    <AdsorbentCard
      headerBackgroundColor={appColors.adsorbentCardHeader}
      bodyBackgroundColor={appColors.adsorbentCardBody}
      header={nombre}
      particleSize={particulaT}
      sBet={sBet}
      vBet={vBet}
      ph={pHCargaCero}
      id={id}
    />
  );
};
