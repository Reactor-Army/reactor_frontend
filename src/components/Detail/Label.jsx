import {Typography} from "@material-ui/core";
import React from "react";
import {LabelContainer} from "./Styles";

export const Label = ({label, value}) => {
  return (
    <LabelContainer>
      <Typography style={{fontWeight: "bold"}}>{label}</Typography>
      <Typography>: {value}</Typography>
    </LabelContainer>
  );
};
