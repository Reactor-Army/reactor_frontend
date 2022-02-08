import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const HelpText = styled.p`
  font-size: calc(14px + 0.8vw);
  font-family: ${appFontFamily.roboto};
  color: ${appColors.primary};
  font-weight: 700;
`;

export const SmallHelpText = styled.div`
  font-size: calc(14px + 0.2vw);
  font-family: ${appFontFamily.roboto};
  text-align: center;
`;

export const DownloadLink = styled.a`
  color: ${appColors.primary};
  font-size: calc(14px + 0.2vw);
  font-family: ${appFontFamily.roboto};
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  margin-left: 5px;
  text-decoration: none;
`;
