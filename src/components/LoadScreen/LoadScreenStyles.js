import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${appColors.pageBackground};
`;

export const FiubaLogo = styled.img`
  max-width: 400px;
  max-height: 200px;
`;

export const LoadingText = styled.p`
  font-family: ${appFontFamily.card};
  font-weight: 500;
  font-size: calc(14px + 1vw);
  text-align: center;
  color: ${appColors.primary};
`;
