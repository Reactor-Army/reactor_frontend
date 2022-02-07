import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const ModalContent = styled.div`
  background-color: ${appColors.white};
  border: 1px solid ${appColors.darkGray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 10px 24px;
  border-radius: 8px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  max-height: 100vh;
  overflow-y: scroll;

  @media (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const BodyContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Message = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;

export const CloseButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  padding: 10px 0;
`;

export const CloseButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
