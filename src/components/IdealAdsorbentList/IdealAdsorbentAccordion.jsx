import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {ProcessList} from "../ProcessList/ProcessList";
import {BooleanChip} from "../Chip/BooleanChip/BooleanChip";
import {NameChip} from "../Chip/NameChip/NameChip";
import {nameAdsorbent, qmaxIdealAdsorbent} from "../../common/FormatUtils";
import {appColors} from "../../common/styles";
import Grid from "@material-ui/core/Grid";

export function IdealAdsorbentAccordion({
  adsorbent,
  maxQmax,
  removeAllAdsorbates,
  loading,
  processes,
  index,
}) {
  return (
    <Accordion key={index}>
      <AccordionSummary
        style={{
          backgroundColor: appColors.idealAdsorbentAccordionHeader,
          minWidth: "360px",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Grid container spacing={3}>
          <Grid item xs>
            <NameChip
              name={nameAdsorbent(adsorbent)}
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
              value={removeAllAdsorbates}
              text={"Remueve todos los adsorbatos"}
              backgroundColor={appColors.idealAdsorbentRemoveAllChip}
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <ProcessList loading={loading} processes={processes} />
      </AccordionDetails>
    </Accordion>
  );
}
