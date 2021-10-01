import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector, useDispatch} from "react-redux";
import {
  SessionIndicatorContainer,
  SessionIndicatorLabel,
  SessionIndicator,
  SessionAction,
} from "./styles";
import {logout} from "../../redux/auth";
import {useHistory} from "react-router-dom";
import {URLS} from "../../routing/urls";

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
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
}));

export const TopBar = ({handleDrawerToggle}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {loggedIn, userData} = useSelector((state) => state.auth);

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
        <SessionIndicatorContainer>
          {loggedIn ? (
            <>
              <SessionIndicatorLabel>
                Sesión iniciada como:
              </SessionIndicatorLabel>
              <SessionIndicator>{userData.email}</SessionIndicator>
              <SessionAction
                onClick={() => {
                  dispatch(logout());
                }}>
                Cerrar sesión
              </SessionAction>
            </>
          ) : (
            <>
              <SessionAction
                onClick={() => {
                  history.push(URLS.LOGIN);
                }}>
                Iniciar sesión
              </SessionAction>
            </>
          )}
        </SessionIndicatorContainer>
      </Toolbar>
    </AppBar>
  );
};
