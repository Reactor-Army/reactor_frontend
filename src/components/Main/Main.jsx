import {TopBar} from "./TopBar";
import {Router} from "../../routing/Router";
import React from "react";
import AppThemeProvider from "./AppThemeProvider";

export const Main = () => {
  return (
    <AppThemeProvider>
      <TopBar />
      <Router />
    </AppThemeProvider>
  );
};
