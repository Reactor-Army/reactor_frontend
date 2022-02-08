import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const ExpandableCardContainer = styled.div`
  transition: 0.1s linear;
  width: calc(260px + 5vw);
  min-height: calc(173px + 4vw);
  border-radius: 15px;
  background: ${appColors.lightGray};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.1s linear;
    transform: scale(1.2, 1.2);
    border: 2px solid ${appColors.primary};
  }
`;

export const Icon = styled.img`
  width: 40%;
  height: 56%;
  margin-bottom: 15px;
`;

export const Text = styled.div`
  font-size: calc(20px + 0.3vw);
  font-weight: bold;
  text-align: center;
  font-family: ${appFontFamily.roboto};
`;
