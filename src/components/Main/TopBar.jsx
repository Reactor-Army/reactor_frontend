import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {
  SessionIndicatorContainer,
  SessionIndicatorLabel,
  SessionIndicator,
} from "./styles";

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
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      alignItems: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export const TopBar = ({handleDrawerToggle}) => {
  const classes = useStyles();
  const {loggedIn, userData} = useSelector((state) => state.auth);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        {loggedIn && (
          <SessionIndicatorContainer>
            <SessionIndicatorLabel>Sesión iniciada como:</SessionIndicatorLabel>
            <SessionIndicator>{userData.email}</SessionIndicator>
          </SessionIndicatorContainer>
        )}
      </Toolbar>
    </AppBar>
  );
};
