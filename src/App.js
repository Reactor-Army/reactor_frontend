import React from "react";
import {Main} from "./components/Main/Main";
import AppThemeProvider from "./components/Main/AppThemeProvider";
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MathJaxContext} from "better-react-mathjax";

export default function App() {
  return (
    <AppThemeProvider>
      <MathJaxContext>
        <CssBaseline />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MathJaxContext>
    </AppThemeProvider>
  );
}
