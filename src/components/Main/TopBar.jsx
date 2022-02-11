import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import {appColors} from "../../common/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    color: appColors.primary,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    background: appColors.softGray,
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
}));

export const TopBar = ({handleDrawerToggle}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
