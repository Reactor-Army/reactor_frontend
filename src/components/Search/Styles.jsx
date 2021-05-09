import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";

export const SearchContainer = styled.div`
  max-width: 1139px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
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

  &:hover {
    background-color: #22d0f7;
  }

  &:active {
    background-color: ${appColors.primary};
  }
`;
