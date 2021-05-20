import React from "react";
import {Sidebar} from "../Sidebar/Sidebar";
import {TopBar} from "./TopBar";
import Container from "@material-ui/core/Container";
import {Router} from "../../routing/Router";
import {Root, useStyles} from "./styles";

export const Main = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  return (
    <Root>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Container>
        <main className={classes.content}>
          <Router />
        </main>
      </Container>
    </Root>
  );
};
