import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const AppTitle = styled.div`
  font-family: ${appFontFamily.card};
  font-size: calc(35px + 1.5vw);
  text-align: center;
  color: ${appColors.primary};
  text-transform: uppercase;
  font-weight: bold;
`;

export const LogosContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 133px;
`;
