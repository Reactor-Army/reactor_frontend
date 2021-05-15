import Grid from "@material-ui/core/Grid";
import {AdsorbateCardContainer} from "../Card/AdsorbateCard/AdsorbateCardContainer";
import {AdsorbentCardContainer} from "../Card/AdsorbentCard/AdsorbentCardContainer";
import React from "react";

export const Cards = ({adsorbate, adsorbent}) => {
  return (
    <Grid container direction={"row"}>
      <Grid item xs={12} lg={6}>
        <AdsorbateCardContainer adsorbate={adsorbate} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AdsorbentCardContainer adsorbent={adsorbent} />
      </Grid>
    </Grid>
  );
};
