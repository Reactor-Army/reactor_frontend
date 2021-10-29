import React from "react";
import {Main} from "./components/Main/Main";
import AppThemeProvider from "./components/Main/AppThemeProvider";
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {SessionTracker} from "./components/SessionTracker/SessionTracker";

export default function App() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <SessionTracker />
        <Main />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
