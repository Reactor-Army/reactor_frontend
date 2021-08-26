import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const ExpandableCardContainer = styled.div`
  transition: 0.3s linear;
  width: 310px;
  height: 280px;
  border-radius: 15px;
  border: 1px solid ${appColors.lightGray};
  background: ${appColors.primary};
  cursor: pointer;

  &:hover {
    transition: 0.3s linear;
    transform: scale(1.2, 1.2);
  }
`;
