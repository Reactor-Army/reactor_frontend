import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const CardHeader = styled.div`
  display: flex;
  height: 25%;
  border-bottom: 1px solid #3e423f;
  font-size: 24px;
  font-family: ${appFontFamily.card};
  padding-bottom: 4px;
  background-color: ${(props) => props.theme.backgroundColor || appColors.white};
`;

export const CardBody = styled.div`
  height: 45%;
  margin-top: 15px;
`;

export const CardFooter = styled.div`
  display: flex;
  height: 30%;
  margin-left: 24px;
`;

export const HeaderText = styled.div`
  font-weight: bold;
  font-family: ${appFontFamily.card};
  margin-left: 22px;
  padding: 0 65px 0 0;
`;

export const ParticleSizeText = styled.div`
  font-family: ${appFontFamily.primary};
  margin-left: 22px;
  font-size: 14px;
  font-family: ${appFontFamily.card};
`;

export const FooterItem = styled.div`
  font-size: 14px;
  font-family: ${appFontFamily.primary};
  padding-right: 15px;
  font-family: ${appFontFamily.card};
`;
