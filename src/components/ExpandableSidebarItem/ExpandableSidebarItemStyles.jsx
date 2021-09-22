import styled from "styled-components/macro";
import {appColors, appFontFamily, appFontColors} from "../../common/styles";

export const ListItemButton = styled.div`
  cursor: pointer;
  background: ${appColors.primary};
  color: ${appFontColors.fontColorMenu};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const ListItemTitle = styled.div`
  font-family: ${appFontFamily.card};
  font-size: 15px;
  font-weight: bold;
`;

export const ListItem = styled.div`
  font-family: ${appFontFamily.card};
  font-size: 15px;
  padding-left: 10px;
  color: ${appFontColors.fontColorMenu};
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${appColors.darkBlue};
    border-radius: 10px;
  }
`;
