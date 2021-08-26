import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  font-size: 72px;
  font-family: ${appFontFamily.card};
  color: ${appColors.primary};
  text-transform: uppercase;
  padding: 50px 0;

  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-self: center;
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 200px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
