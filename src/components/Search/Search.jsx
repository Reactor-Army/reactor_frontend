import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";

export function Search({children}) {
  return (
    <Accordion expanded={true}>
      <AccordionDetails>
        <Grid container justify={"flex-start"}>
          {children}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
