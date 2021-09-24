import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {Icon} from "../../common/styles";
import info_icon from "../../resources/images/info_icon.png";
import React from "react";

const StyledMuiTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 12,
  },
}))(Tooltip);

export const DetailsTooltip = () => (
  <StyledMuiTooltip title={"Parámetros obtenidos con ensayos discontinuos"}>
    <Icon src={info_icon} alt="Información" />
  </StyledMuiTooltip>
);
