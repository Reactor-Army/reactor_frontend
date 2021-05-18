import React from "react";
import {Main} from "./components/Main/Main";
import AppThemeProvider from "./components/Main/AppThemeProvider";
import {BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
