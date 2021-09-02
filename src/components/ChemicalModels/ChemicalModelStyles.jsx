import styled from "styled-components/macro";
import {Paragraph} from "../../routing/routes/AboutUsRoute/AboutUsRouteStyles";
import {appFontFamily, appColors} from "../../common/styles";

export const ResultsTitleContanier = styled(Paragraph)`
  margin-top: 0;
  margin-left: 15px;
  font-weight: bold;
  color: ${appColors.lightBlue};
`;

const Text = styled.div`
  font-size: calc(9px + 0.5vw);
  font-family: ${appFontFamily.primary};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const Field = styled(Text)`
  margin-left: 15px;
  & > b {
    font-weight: bold;
  }
`;

export const HelpText = styled(Text)`
  padding-bottom: 20px;
`;
