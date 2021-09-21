import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../../common/styles";

export const ModelPickCard = styled.div`
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  width: 100%;
  display: flex;
  background: ${appColors.white};
  row-gap: 15px;
  border: 2px solid transparent;
  margin: 5px 0;
  border-radius: 15px;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 2px solid ${appColors.lightBlue};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${appColors.lightBlue};
  font-size: calc(12px + 0.8vw);
  font-family: ${appFontFamily.card};
  text-transform: uppercase;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 500px) {
    text-align: center;
    font-size: calc(12px + 0.8vw);
  }
`;

export const Content = styled.p`
  font-size: calc(12px + 0.45vw);
  @media (max-width: 500px) {
    display: none;
  }
`;

export const PickCardLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 64%;
  overflow-wrap: break-word;

  @media (max-width: 500px) {
    width: 100%;
    height: 130px;
  }
`;

export const PickCardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 36%;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
    display: none;
  }
`;

export const EquationImg = styled.img`
  width: 70%;
  height: 200px;
`;

export const ContentFrame = styled.div`
  max-width: 63vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 20px;
  }
`;
