import React from "react";
import {Sidebar} from "../Sidebar/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />;
    </div>
  );
};
