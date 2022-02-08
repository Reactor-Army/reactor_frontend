import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Label = styled.div`
  background: ${appColors.lightRed};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: calc(12px + 0.3vw);
  position: fixed;
  width: calc(100% - 240px);
  z-index: 2;
  padding: 0 20px;
  overflow: hidden;
  text-align: center;

  @media (max-width: 600px) {
    top: initial;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Link = styled.a`
  color: ${appColors.white};
`;

export const Content = styled.p`
  font-family: ${appFontFamily.roboto};
  color: ${appColors.white};
  font-weight: 500;
`;
