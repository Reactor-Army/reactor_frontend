import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 150px;
  overflow: visible;
  background: ${appColors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  font-size: calc(35px + 1.5vw);
  font-family: ${appFontFamily.card};
  font-weight: bold;
  color: ${appColors.white};
  text-transform: uppercase;
  padding: 50px 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 15px;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;

    & > img {
      margin: 15px 0;
    }
  }
  height: 100%;
`;

export const Image = styled.img`
  width: calc(160px + 1.8vw);
  height: calc(120px + 1.5vw);
  margin: 0 20px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(calc(260px + 5vw), 100%), 1fr)
  );
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  padding: 40px;
  width: 100vw;
  justify-items: center;
`;
