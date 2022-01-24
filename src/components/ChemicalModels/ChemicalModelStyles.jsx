import styled from "styled-components/macro";
import {Paragraph} from "../../routing/routes/AboutUsRoute/AboutUsRouteStyles";
import {appColors, appFontFamily} from "../../common/styles";

export const ResultsTitleContanier = styled(Paragraph)`
  margin-top: 0;
  margin-left: 15px;
  font-weight: bold;
  color: ${appColors.lightBlue};
`;

const Text = styled.div`
  font-size: calc(10px + 0.2vw);
  font-family: ${appFontFamily.primary};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const Field = styled(Text)`
  margin-left: 7px;
  & > b {
    font-weight: bold;
  }
`;

export const HelpText = styled(Text)`
  font-size: calc(14px + 0.3vw);
`;

export const FileUploadContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  border: 2px dashed ${appColors.black};
  outline: none;
  min-height: 100px;
  justify-content: center;
  transition: border 0.24s ease-in-out;
  overflow-x: hidden;
  width: 100%;
  width: calc(260px + 10vw);
  cursor: pointer;
`;

export const FileCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const FileCardContainer = styled.div`
  display: flex;
`;

export const DropzoneContainer = styled.div`
  justify-content: space-around;
  display: flex;
  padding: 20px;
  text-align: center;
  width: 100%;
`;
