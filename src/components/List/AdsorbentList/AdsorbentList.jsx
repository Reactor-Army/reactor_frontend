import React from "react";

import {ListContainer} from "../ListStyles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {AdsorbentCardContainer} from "../../Card/AdsorbentCard/AdsorbentCardContainer";

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
        adsorbents.map((adsorbent) => (
          <AdsorbentCardContainer adsorbent={adsorbent} key={adsorbent.id} />
        ))}
    </ListContainer>
  );
}
