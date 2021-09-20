import styled from "styled-components/macro";
import {appColors} from "../../../common/styles";

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
    border: 3px solid ${appColors.lightBlue};
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const PickCardSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 28vh;
`;

export const EquationImg = styled.img`
  width: 30%;
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
