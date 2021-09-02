import styled from "styled-components/macro";
import {Paragraph} from "../../routing/routes/AboutUsRoute/AboutUsRouteStyles";
import {appFontFamily} from "../../common/styles";

export const ResultsTitleContanier = styled(Paragraph)`
  margin-top: 0;
  margin-left: 15px;
  font-weight: bold;
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

export const FileUploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: black;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
