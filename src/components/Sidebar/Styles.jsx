import styled from "styled-components/macro";
import {appFontColors, appFontFamily} from "../../common/styles";

export const LinkContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  height: 50px;
  margin: auto;

  &:hover {
    background-color: rgba(29, 61, 142, 0.1);
    cursor: "pointer";
  }
`;

export const LinkText = styled.p`
  text-align: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  height: 50px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.fontColorMenu};
  font-weight: bold;
  font-size: 22px;
  justify-content: center;
  margin: 30px 0 10px 0;
`;
