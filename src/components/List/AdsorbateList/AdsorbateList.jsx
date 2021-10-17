import React from "react";
import {ListContainer} from "../ListStyles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {AdsorbateCardContainer} from "../../Card/AdsorbateCard/AdsorbateCardContainer";

export function AdsorbateList({adsorbates, loading}) {
  if (!adsorbates || loading) {
    return (
      <ListContainer>
        <CircularProgress />
      </ListContainer>
    );
  }
  if (adsorbates.length === 0) {
    return (
      <Typography>
        No se encontraron adsorbatos para tu búsqueda. Probá con otros
        parámetros.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {adsorbates.map((adsorbate) => (
        <AdsorbateCardContainer adsorbate={adsorbate} key={adsorbate.id} />
      ))}
    </ListContainer>
  );
}
