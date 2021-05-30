import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer} from "./Styles";

export const VBetLabel = ({value}) => {
  return (
    <LabelContainer>
      <Typography style={{fontWeight: "bold"}}>vBet</Typography>
      <Typography>: {value || "-"}</Typography>
      &nbsp; cm<sup>3</sup>/g
    </LabelContainer>
  );
};
