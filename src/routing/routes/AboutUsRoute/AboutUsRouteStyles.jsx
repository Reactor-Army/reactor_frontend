import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../../common/styles";

export const AboutUsPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentFrame = styled.div`
  max-width: 60vw;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  padding: 20px 80px;

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: calc(12px + 0.5vw);
  line-height: 1.5;
  font-family: ${appFontFamily.card};
`;

export const SmallSubtitle = styled.h2`
  color: ${appColors.lightBlue};
  font-size: calc(10px + 0.9vw);
  font-family: ${appFontFamily.card};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  color: ${appColors.lightBlue};
  font-size: calc(15px + 1vw);
  font-family: ${appFontFamily.card};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: ${appColors.lightBlue};
  font-size: calc(20px + 1.5vw);
  font-family: ${appFontFamily.card};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0px;
`;

export const AuthorsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const BoldText = styled.b`
  font-weight: 500;
`;

export const AuthorsTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
