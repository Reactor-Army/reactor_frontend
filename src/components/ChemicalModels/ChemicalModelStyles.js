import styled from "styled-components/macro";
import {Paragraph} from "../../routing/routes/AboutUsRoute/AboutUsRouteStyles";
import {appColors, appFontFamily} from "../../common/styles";

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
  border-radius: 2px;
  border: 2px dashed ${appColors.black};
  color: ${appColors.lightGray};
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const FileCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  margin-top: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FileCardContainer = styled.div`
  display: flex;
`;

export const DropzoneContainer = styled.div`
  justify-content: space-around;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
