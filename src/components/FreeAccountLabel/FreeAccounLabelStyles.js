import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Label = styled.div`
  background: #fa7d7d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-family: ${appFontFamily.card};
  font-size: calc(12px + 0.3vw);
  color: ${appColors.white};
  font-weight: 500;
  text-align: center;
  position: fixed;
  width: calc(100% - 240px);
  z-index: 2;
  padding: 0 20px;

  @media (max-width: 600px) {
    top: initial;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;
