import {TopBar} from "./TopBar";
import {Router} from "../../routing/Router";
import React from "react";
import AppThemeProvider from "./AppThemeProvider";
import {Sidebar} from "../Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export const Main = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Grid container direction={"column"} spacing={10}>
          <Grid item>
            <TopBar />
          </Grid>
          <Grid item container>
            <Sidebar />
            <Container>
              <Router />
            </Container>
          </Grid>
        </Grid>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
