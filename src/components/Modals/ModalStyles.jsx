import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const ModalContent = styled.div`
  background-color: ${appColors.white};
  border: 1px solid ${appColors.gray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 32px 24px;
  border-radius: 8px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
`;

export const BodyContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 2000px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 580px) {
    width: 65vw;
  }

  @media (max-width: 320px) {
    width: 75vw;
  }
`;

export const Message = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Info = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: justify;
`;

export const Ecuation = styled.img`
  margin: 0 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: calc(300px + 0.5vw);
  height: calc(60px + 0.5vw);
`;

export const UnitContainer = styled.div`
  display: flex;
  margin: 0 2px;
`;

export const VariableContainer = styled.div`
  display: flex;
`;

export const SupUnit = styled.sup``;

export const InfoVariable = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin: 0 5px;
  text-align: justify;
`;

export const NameVariable = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin: 0 5px;
  text-align: justify;
  font-weight: bold;
`;

export const SubName = styled.sub``;
