import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {LinkContainer, LinkText, Title} from "./Styles";
import {Link} from "react-router-dom";
import {appColors} from "../../common/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: appColors.primary,
  },
}));

export const Sidebar = (props) => {
  const {window, mobileOpen, handleDrawerToggle} = props;
  const classes = useStyles();

  const drawer = (
    <Container>
      <Title>Reactor App</Title>
      {Routes.map((route, index) => {
        return (
          <LinkContainer key={index}>
            <Link to={route.path} style={{textDecoration: "none"}}>
              <LinkText>{route.name}</LinkText>
            </Link>
          </LinkContainer>
        );
      })}
    </Container>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

const Routes = [
  {
    path: "/",
    name: "Inicio",
  },

  {
    path: "/adsorbatos",
    name: "Adsorbatos",
  },

  {
    path: "/adsorbentes",
    name: "Adsorbentes",
  },

  {
    path: "/procesos",
    name: "Procesos",
  },

  {
    path: "/adsorbente/ideal",
    name: "Buscar adsorbente",
  },
];
