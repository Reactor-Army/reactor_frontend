import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

export function AdsorbatoSearch() {
  return (
    <Accordion expanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1d-content"
        id="panel1d-header">
        <Typography>Buscar</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container justify={"flex-end"}>
          <Grid item xs={3}>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />{" "}
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              label="Carga iónica"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
