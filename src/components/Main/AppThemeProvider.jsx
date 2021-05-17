import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {appColors} from "../../common/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: appColors.primary,
    },
  },
});

export default function AppThemeProvider({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
