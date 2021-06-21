import styled from "styled-components/macro";
import {appFontFamily, appFontColors} from "../../../common/styles";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 580px) {
    width: 80vw;
  }
`;

export const Message = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Warning = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${appFontColors.warning};
`;
