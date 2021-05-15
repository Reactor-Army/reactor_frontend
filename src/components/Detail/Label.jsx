import {Typography} from "@material-ui/core";
import React from "react";

export const Label = ({label, value}) => {
  return (
    <div style={{display: "flex"}}>
      <Typography style={{fontWeight: "bold"}}>{label}</Typography>
      <Typography>: {value}</Typography>
    </div>
  );
};
