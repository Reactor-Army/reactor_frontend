import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Reactor App</Typography>
      </Toolbar>
    </AppBar>
  );
};
