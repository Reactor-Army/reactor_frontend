import styled from "styled-components/macro";
import {appFontColors, appFontFamily} from "../../common/styles";

export const LinkContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  height: 50px;
  margin: 5px auto;

  &:hover {
    background-color: #22d0f7;
    cursor: "pointer";
  }
`;

export const LinkText = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  padding: 12px 0 0 47px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-weight: bold;
  font-size: 18px;
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
