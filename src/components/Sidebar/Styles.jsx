import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";
import {makeStyles} from "@material-ui/core/styles";
const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: appColors.primary,
  },
}));

export const LinkContainer = styled.div`
  width: 95%;
  margin: auto;
  border-radius: 8px;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${appColors.darkBlue};
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  width: 95%;
  border-radius: 8px;
  margin: auto;
  margin-top: 30px;
  cursor: default;
`;

export const LinkText = styled.p`
  text-align: left;
  margin-left: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-size: 18px;
  white-space: nowrap;
`;

export const TitleText = styled.p`
  text-align: left;
  margin-left: -10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
`;

export const Title = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  height: 50px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-weight: bold;
  font-size: 22px;
  justify-content: center;
  margin: 30px 0 10px 0;
`;
