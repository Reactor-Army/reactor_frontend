import React from "react";
import {Sidebar} from "../Sidebar/Sidebar";
import {makeStyles} from "@material-ui/core/styles";
import {TopBar} from "./TopBar";
import Container from "@material-ui/core/Container";
import {Router} from "../../routing/Router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    margin: theme.spacing(3),
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
      <Container>
        <main className={classes.content}>
          <Router />
        </main>
      </Container>
    </div>
  );
};
