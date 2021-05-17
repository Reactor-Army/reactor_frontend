import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";

export function IdealAdsorbentList({idealAdsorbents, loading}) {
  console.log(idealAdsorbents);
  if (!idealAdsorbents || loading) {
    return <CircularProgress />;
  }

  if (idealAdsorbents.length === 0) {
    return (
      <Typography>
        No se encontraron adsorbentes para tu búsqueda. Probá con otros
        adsorbatos.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {idealAdsorbents.length &&
        idealAdsorbents.map(({adsorbente}, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>{adsorbente.nombre}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </ListContainer>
  );
}
