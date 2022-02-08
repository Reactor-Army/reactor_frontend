import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {nameAdsorbent, qmaxIdealAdsorbent} from "../../common/FormatUtils";
import {appColors} from "../../common/styles";
import {
  AccordionDetailsStyles,
  StyledAccordionSummary,
  StyledExpandMoreIcon,
  ChipContainer,
  Chip,
} from "./Styles";
import {ProcessList} from "../List/ProcessList/ProcessList";

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
      <StyledAccordionSummary
        expandIcon={<StyledExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <ChipContainer>
          <Chip background={appColors.greenFluor}>
            {nameAdsorbent(adsorbent)}
          </Chip>
          <Chip background={appColors.lightOrange}>
            {qmaxIdealAdsorbent(maxQmax)}
          </Chip>
          {removeAllAdsorbates && (
            <Chip background={appColors.purple}>
              Remueve todos los adsorbatos
            </Chip>
          )}
        </ChipContainer>
      </StyledAccordionSummary>
      <AccordionDetails style={AccordionDetailsStyles}>
        <ProcessList loading={loading} processes={processes} />
      </AccordionDetails>
    </Accordion>
  );
}
