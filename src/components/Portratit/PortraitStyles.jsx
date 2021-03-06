import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 20px;
`;

export const Text = styled.div`
  font-family: ${appFontFamily.roboto};
  font-size: calc(12px + 0.5vw);
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-family: ${appFontFamily.roboto};
  font-size: calc(12px + 0.4vw);
  text-align: center;
  color: ${appColors.darkGray};
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
