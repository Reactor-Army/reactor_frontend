import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Search} from "./Search";

export function AdsorbateSearch({
  name,
  handleNameChange,
  charge,
  handleChargeChange,
  onSearchSubmit,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Grid item xs={3}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-basic"
          label="Carga iónica"
          type="number"
          variant="outlined"
          value={charge}
          onChange={handleChargeChange}
        />
      </Grid>
    </Search>
  );
}
