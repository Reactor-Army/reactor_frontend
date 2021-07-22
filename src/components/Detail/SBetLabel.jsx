import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer} from "./Styles";
import {UNITS} from "../../common/fields";

export const SBetLabel = ({value}) => {
  return (
    <LabelContainer>
      <Typography style={{fontWeight: "bold"}}>sBet</Typography>
      <Typography>: {value ? `${value} ${UNITS.SBET}` : "-"}</Typography>
    </LabelContainer>
  );
};
