import styled from "styled-components/macro";
import {appFontFamily, appColors, appFontColors} from "../../../common/styles";
import {ImageContainer} from "../HomeRoute/HomeRouteStyles";

export const Footer = styled(ImageContainer)`
  position: absolute;
  top: 85%;
  height: initial;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 480px;
  border: 1px solid ${appColors.gray};
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
  padding: 10px 30px;
`;

export const ErrorMessage = styled.div`
  font-family: ${appFontFamily.card};
  font-size: 14px;
  color: ${appFontColors.warning};
  padding: 10px 0;
  text-align: center;
  overflow-y: hidden;
  overflow-wrap: break-word;
`;
