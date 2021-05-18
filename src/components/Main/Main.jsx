import React from "react";
import {Sidebar} from "../Sidebar/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import {TopBar} from "./TopBar";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export const Main = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
};
