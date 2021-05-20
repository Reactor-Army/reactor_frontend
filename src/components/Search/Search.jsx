import Accordion from "@material-ui/core/Accordion";
import React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import {SearchBarContainerStyles} from "./Styles";
import {useScreenWidth} from "../../customHooks/useScreenWidth";

export function Search({children}) {
  const search_align_width = 845;
  const isMobile = useScreenWidth(search_align_width);
  return (
    <Accordion expanded={true} style={SearchBarContainerStyles}>
      <AccordionDetails>
        <Grid container justify={isMobile ? "center" : "flex-start"}>
          {children}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
