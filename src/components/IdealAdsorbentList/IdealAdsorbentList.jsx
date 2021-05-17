import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {IdealAdsorbentContainer, MessageContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";
import {ProcessList} from "../../components/ProcessList/ProcessList";
import {BooleanChip} from "../Chip/BooleanChip/BooleanChip";
import {NameChip} from "../Chip/NameChip/NameChip";
import {nameAdsorbent, qmaxIdealAdsorbent} from "../../common/FormatUtils";
import {appColors} from "../../common/styles";
import Grid from "@material-ui/core/Grid";

export function IdealAdsorbentList({idealAdsorbents, loading}) {
  if (!idealAdsorbents || loading) {
    return <CircularProgress />;
  }

  if (idealAdsorbents.length === 0) {
    return (
      <MessageContainer>
        <Typography>
          No se encontraron adsorbentes para tu búsqueda. Probá con otros
          adsorbatos.
        </Typography>
      </MessageContainer>
    );
  }
  return (
    <IdealAdsorbentContainer>
      {idealAdsorbents.length &&
        idealAdsorbents.map(
          (
            {adsorbente, maxQmax, remueveTodosLosAdsorbatos, procesos},
            index,
          ) => (
            <Accordion key={index}>
              <AccordionSummary
                style={{
                  backgroundColor: appColors.idealAdsorbentAccordionHeader,
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Grid container spacing={3}>
                  <Grid item xs>
                    <NameChip
                      name={nameAdsorbent(adsorbente)}
                      backgroundColor={appColors.adsorbentCardHeader}
                      fontSize={15}
                      margin={"0px"}
                      fontWeight={"normal"}
                    />
                  </Grid>
                  <Grid item xs>
                    <NameChip
                      name={qmaxIdealAdsorbent(maxQmax)}
                      backgroundColor={appColors.idealAdsorbentQmaxChip}
                      fontSize={15}
                      margin={"0px"}
                      fontWeight={"normal"}
                    />
                  </Grid>
                  <Grid item xs>
                    <BooleanChip
                      value={remueveTodosLosAdsorbatos}
                      text={"Remueve todos los adsorbatos"}
                      backgroundColor={appColors.idealAdsorbentRemoveAllChip}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <ProcessList loading={loading} processes={procesos} />
              </AccordionDetails>
            </Accordion>
          ),
        )}
    </IdealAdsorbentContainer>
  );
}
