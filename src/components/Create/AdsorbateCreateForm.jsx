import React from "react";
import TextField from "@material-ui/core/TextField";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const AdsorbateCreateForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 200,
      }}>
      <div style={{margin: 10}}>
        <Typography h4>Nombre IUPAC</Typography>
        <TextField required id="standard-required" variant="outlined" />
      </div>
      <div style={{margin: 10}}>
        <Typography h4>Nombre del ion</Typography>
        <TextField id="standard-disabled" variant="outlined" />{" "}
      </div>
      <div style={{margin: 10}}>
        <Typography h4>Carga iónica</Typography>
        <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button style={{margin: 10}} variant="contained" color="primary">
        Agregar
      </Button>
    </div>
  );
};
