import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer} from "./Styles";

export const SBetLabel = ({value}) => {
  return (
    <LabelContainer>
      <Typography style={{fontWeight: "bold"}}>sBet</Typography>
      <Typography>: {value || "-"}</Typography>
      &nbsp; m<sup>2</sup>/g
    </LabelContainer>
  );
};
