import React from "react";
import TextField from "@material-ui/core/TextField";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {CreateFormContainer, FormItem} from "./Styles";

export const AdsorbateCreateForm = () => {
  return (
    <CreateFormContainer>
      <FormItem>
        <Typography h4>Nombre IUPAC</Typography>
        <TextField required id="standard-required" variant="outlined" />
      </FormItem>
      <FormItem>
        <Typography h4>Nombre del ion</Typography>
        <TextField id="standard-disabled" variant="outlined" />
      </FormItem>
      <FormItem>
        <Typography h4>Carga iónica</Typography>
        <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormItem>
      <Button style={{margin: 10}} variant="contained" color="primary">
        Agregar
      </Button>
    </CreateFormContainer>
  );
};
