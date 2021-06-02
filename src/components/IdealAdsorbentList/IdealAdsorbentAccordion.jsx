import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {NameChip} from "../Chip/NameChip/NameChip";
import {nameAdsorbent, qmaxIdealAdsorbent} from "../../common/FormatUtils";
import {appColors} from "../../common/styles";
import Grid from "@material-ui/core/Grid";
import {AccordionDetailsStyles} from "./Styles";
import {Chip} from "@material-ui/core";
import {useScreenWidth} from "../../customHooks/useScreenWidth";
import {ProcessList} from "../List/ProcessList/ProcessList";

export function IdealAdsorbentAccordion({
  adsorbent,
  maxQmax,
  removeAllAdsorbates,
  loading,
  processes,
  index,
}) {
  const smallScreen = useScreenWidth(560);
  return (
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
            {removeAllAdsorbates && (
              <Chip
                style={{
                  fontSize: 15,
                  margin: "2px",
                  backgroundColor: appColors.idealAdsorbentRemoveAllChip,
                  whiteSpace: "no-wrap",
                  width: smallScreen && "300px",
                }}
                label={"Remueve todos los adsorbatos"}
              />
            )}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails style={AccordionDetailsStyles}>
        <ProcessList loading={loading} processes={processes} />
      </AccordionDetails>
    </Accordion>
  );
}
