import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";

export const IonicCharge = ({charge, handleChargeChange, onKeyPress}) => (
  <Grid item xs={3}>
    <TextField
      id="outlined-basic"
      label="Carga iónica"
      type="number"
      variant="outlined"
      value={charge}
      onChange={handleChargeChange}
      onKeyPress={onKeyPress}
    />
  </Grid>
);
