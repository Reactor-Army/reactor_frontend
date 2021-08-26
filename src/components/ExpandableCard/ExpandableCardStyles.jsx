import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const ExpandableCardContainer = styled.div`
  transition: 0.1s linear;
  width: 350px;
  height: 240px;
  border-radius: 15px;
  border: 1px solid ${appColors.white};
  background: ${appColors.primary};
  cursor: pointer;

  &:hover {
    transition: 0.1s linear;
    transform: scale(1.2, 1.2);
  }
`;
