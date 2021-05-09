import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import {Button} from "./Styles";

export function Search({children, onSearchSubmit}) {
  return (
    <Accordion expanded={true}>
      <AccordionDetails>
        <Grid container justify={"flex-start"}>
          {children}
          <Button onClick={onSearchSubmit}>Buscar</Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
