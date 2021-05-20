import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {TextFieldStyles} from "../Styles";

export const Name = ({name, handleNameChange, onKeyPress}) => (
  <Grid item>
    <TextField
      id="outlined-basic"
      label="Nombre"
      variant="outlined"
      value={name}
      onChange={handleNameChange}
      onKeyPress={onKeyPress}
      style={TextFieldStyles}
    />
  </Grid>
);
