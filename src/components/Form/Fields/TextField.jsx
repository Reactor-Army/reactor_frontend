import React from "react";
import {TextField as MuiTextField} from "@material-ui/core";

export const TextField = ({...props}) => {
  return <MuiTextField variant="outlined" {...props} />;
};
