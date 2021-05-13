import React from "react";

import {AdsorbentCard} from "../../components/Card/AdsorbentCard/AdsorbentCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export function AdsorbentList({adsorbents, loading}) {
  if (!adsorbents || loading) {
    return <CircularProgress />;
  }

  if (adsorbents.length === 0) {
    return (
      <Typography>
        No se encontraron adsorbentes para tu búsqueda. Probá con otros
        parámetros.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {adsorbents.length &&
        adsorbents.map(({nombre, particulaT, sBet, vBet, pHCargaCero, id}) => (
          <AdsorbentCard
            headerBackgroundColor={appColors.adsorbentCardHeader}
            bodyBackgroundColor={appColors.adsorbentCardBody}
            header={nombre}
            particleSize={particulaT}
            sBet={sBet}
            vBet={vBet}
            ph={pHCargaCero}
            id={id}
            key={id}
          />
        ))}
    </ListContainer>
  );
}
