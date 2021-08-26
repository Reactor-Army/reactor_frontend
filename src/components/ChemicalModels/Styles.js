import styled from "styled-components";
import {Paragraph} from "../HomePage/Styles";
import {appFontFamily} from "../../common/styles";

export const ResultsTitleContanier = styled(Paragraph)`
  margin-top: 0;
  margin-left: 15px;
`;

const Text = styled.div`
  font-size: 1rem;
  font-family: ${appFontFamily.primary};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const ResultsField = styled(Text)`
  margin-left: 15px;
`;

export const HelpText = styled(Text)`
  padding-bottom: 20px;
`;
