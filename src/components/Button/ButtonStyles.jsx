import styled from "styled-components/macro";
import {appColors, appFontFamily, appFontColors} from "../../common/styles";

export const StyledButton = styled.button`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
  background-color: ${appColors.primary};
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.white};
  font-size: 16px;
  border-radius: 4px;
  width: 100px;
  border: none;
  font-weight: bold;
  height: 40px;

  &:hover {
    background-color: #22d0f7;
    cursor: pointer;
  }

  &:active {
    background-color: ${appColors.primary};
  }
`;
