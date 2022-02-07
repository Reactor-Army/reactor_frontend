import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {appColors} from "../../common/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    background: {
      default: appColors.softGray,
    },
    primary: {
      main: appColors.primary,
    },
  },
});

export default function AppThemeProvider({children}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
