import Fab from "@material-ui/core/Fab";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import React from "react";

export const ViewChartIcon = ({onClick}) => {
  return (
    <Fab color="primary" aria-label="delete" onClick={onClick}>
      <ShowChartIcon />
    </Fab>
  );
};
