import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 200px;
  overflow: visible;
  background: ${appColors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  font-size: 72px;
  font-family: ${appFontFamily.card};
  font-weight: bold;
  color: ${appColors.white};
  text-transform: uppercase;
  padding: 50px 0;

  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-self: center;

  @media (max-width: 650px) {
    flex-direction: column;

    & > img {
      margin: 15px 0;
    }
  }
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 150px;
  margin: 0 20px;

  @media (max-width: 850px) {
    max-width: 200px;
    max-height: 180px;
  }

  @media (max-width: 400px) {
    max-width: 150px;
    max-height: 120px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  margin: 25px 0;

  @media (max-width: 1330px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
