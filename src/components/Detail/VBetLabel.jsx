import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer} from "./Styles";
import {UNITS} from "../../common/fields";

export const VBetLabel = ({value}) => {
  return (
    <LabelContainer>
      <Typography style={{fontWeight: "bold"}}>vBet</Typography>
      <Typography>: {`${value} ${UNITS.VBET}` || "-"}</Typography>
    </LabelContainer>
  );
};
