import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Search} from "./Search";
import {Name} from "./Fields/Name";

export function AdsorbateSearch({
  name,
  handleNameChange,
  charge,
  handleChargeChange,
  onSearchSubmit,
}) {
  return (
    <Search onSearchSubmit={onSearchSubmit}>
      <Name name={name} handleNameChange={handleNameChange} />
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
