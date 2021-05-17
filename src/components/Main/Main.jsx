import {TopBar} from "./TopBar";
import {Router} from "../../routing/Router";
import React from "react";
import AppThemeProvider from "./AppThemeProvider";
import {Sidebar} from "../Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";

export const Main = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <TopBar />
        <Sidebar />
        <Router />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
