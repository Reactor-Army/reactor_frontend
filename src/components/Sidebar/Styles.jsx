import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";

export const LinkContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  height: 50px;
  margin: 5px auto;

  &:hover {
    background-color: #22d0f7;
  }
`;

export const LinkText = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  padding: 12px 0 0 47px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.white};
  font-weight: bold;
  font-size: 18px;
`;

export const Container = styled.div`
  background-color: ${appColors.primary};
  width: 230px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;

  @media screen and (max-width: 1440px) {
    top: 0px;
    position: sticky;
    padding-bottom: 100vh;
  }
`;

export const Title = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  height: 50px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.white};
  font-weight: bold;
  font-size: 22px;
  justify-content: center;
  margin: 5px 0 10px 0;
`;
