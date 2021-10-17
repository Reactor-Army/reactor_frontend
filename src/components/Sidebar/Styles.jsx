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
    background: appColors.pageBackground,
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: appColors.lightGray,
      borderRadius: "20px",
    },
  },
}));

export const SessionUser = styled.div`
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.primary};
  font-size: 14px;
  text-align: center;
  height: 30px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  ${(props) => !props.loggedIn && "display: none"}
`;

export const LinkContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${appColors.lightGray};
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
  padding-left: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appColors.black};
  font-weight: 600;
  font-size: 15px;
  white-space: nowrap;
`;

export const TitleText = styled.p`
  margin-left: -12px;
  font-family: ${appFontFamily.primary};
  color: ${appColors.primary};
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
  color: ${appColors.primary};
  font-weight: bold;
  font-size: 22px;
  justify-content: center;
  margin: 30px 0 10px 0;
`;
