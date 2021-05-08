import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";

export const Name = ({name, handleNameChange}) => (
  <Grid item xs={3}>
    <TextField
      id="outlined-basic"
      label="Nombre"
      variant="outlined"
      value={name}
      onChange={handleNameChange}
    />
  </Grid>
);
