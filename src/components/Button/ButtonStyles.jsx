import styled from "styled-components/macro";
import {appColors, appFontFamily, appFontColors} from "../../common/styles";

export const SmallButton = styled.button`
  color: ${appColors.darkBlue};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
  background-color: ${appColors.primary};
  font-family: ${appFontFamily.roboto};
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

export const MediumButton = styled(SmallButton)`
  width: 150px;
  height: 50px;
`;

export const BigButton = styled(SmallButton)`
  width: 200px;
  height: 60px;
`;

export const StyledSubmit = styled.button.attrs({
  type: "submit",
})`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
  background-color: ${appColors.primary};
  font-family: ${appFontFamily.lato};
  color: ${appFontColors.white};
  font-size: 16px;
  border-radius: 4px;
  width: 100px;
  border: none;
  font-weight: bold;
  height: 50px;
  width: 120px;
  margin-top: 20px;

  &:disabled {
    background: ${appColors.darkGray};
    cursor: arrow;
  }

  &:hover: not(:disabled) {
    background-color: #22d0f7;
    cursor: pointer;
  }

  &:active {
    background-color: ${appColors.primary};
  }
`;
