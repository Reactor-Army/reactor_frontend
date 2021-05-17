import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {LinkContainer, LinkText} from "./Styles";
import {Link} from "react-router-dom";
import {Title} from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {appColors} from "../../common/styles";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: appColors.primary,
  },
});
export const Sidebar = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
  return (
    <nav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          classes={{paper: classes.paper}}
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          color={"primary"}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" classes={{paper: classes.paper}} open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
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
