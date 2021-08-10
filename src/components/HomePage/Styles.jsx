import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const HomeTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: ${appFontFamily.primary};
  font-weight: bold;
  font-size: 50px;
  justify-content: center;
  margin: 25px 0 10px 0;
`;

export const Paragraph = styled.p`
  font-size: 25px;
  line-height: 1.5;
  font-family: ${appFontFamily.primary};
`;

export const Link = styled.a`
  color: ${appColors.primary};
`;
