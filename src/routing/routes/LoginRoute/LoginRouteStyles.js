import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid ${appColors.lightGray};
  border-radius: 6px;
  background: ${appColors.white};
  @media (max-width: 500px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const Title = styled.h1`
  font-family: ${appFontFamily.card};
  font-weight: 700;
  text-align: center;
  width: 100%;
  color: ${appColors.primary};
  font-size: 30px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  font-family: ${appFontFamily.card};
  font-size: 18px;
  width: 100%;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 10px 30px 30px;
`;
