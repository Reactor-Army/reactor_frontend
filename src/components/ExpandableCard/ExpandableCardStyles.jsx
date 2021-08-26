import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const ExpandableCardContainer = styled.div`
  transition: 0.1s linear;
  width: 400px;
  height: 280px;
  border-radius: 15px;
  border: 1px solid ${appColors.lightGray};
  background: ${appColors.white};
  cursor: pointer;

  &:hover {
    transition: 0.1s linear;
    transform: scale(1.2, 1.2);
  }
`;
