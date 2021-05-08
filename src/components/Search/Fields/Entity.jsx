import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";

export const Entity = ({formTitle, name, handleChange}) => (
  <Grid item xs={3}>
    <TextField
      id="outlined-basic"
      label={formTitle}
      variant="outlined"
      value={name}
      onChange={handleChange}
    />
  </Grid>
);
