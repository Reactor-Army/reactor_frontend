import {TopBar} from "./TopBar";
import {Router} from "../../routing/Router";
import React from "react";
import AppThemeProvider from "./AppThemeProvider";
import {Sidebar} from "../Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export const Main = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Grid container direction={"column"}>
          <Grid item>
            <TopBar />
          </Grid>
          <Grid item container>
            <Sidebar />
            <Router />
          </Grid>
        </Grid>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
