import styled from "styled-components/macro";
import {appColors, appFontFamily, appFontColors} from "../../common/styles";

export const ExpandableCardContainer = styled.div`
  transition: 0.1s linear;
  width: 350px;
  height: 240px;
  border-radius: 15px;
  background: ${appColors.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: repeating-linear-gradient(
    45deg,
    ${appColors.primary},
    ${appColors.primary} 10px,
    ${appColors.lightBlue} 10px,
    ${appColors.lightBlue} 20px
  );

  &:hover {
    transition: 0.1s linear;
    transform: scale(1.2, 1.2);
    border: 1px solid ${appColors.white};
  }

  @media (max-width: 750px) {
    width: 260px;
    height: 173px;
  }
`;

export const Icon = styled.img`
  width: 32%;
  height: 50%;
  margin-bottom: 15px;
`;

export const Text = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  font-family: ${appFontFamily.card};
  color: ${appFontColors.white};
  text-transform: uppercase;
  text-shadow: 2px 2px ${appColors.black};

  @media (max-width: 750px) {
    font-size: 20px;
  }
`;
