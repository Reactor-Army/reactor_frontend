import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const ZoomIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: flex-start;
  gap: 25px;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const PlotWrapper = styled.div`
  width: 100%;
`;

export const Plot = styled.div`
  width: 100%;
  height: 100%;

  .axis-label {
    font-weight: bold;
  }

  circle {
    r: 4;
  }

  .line {
    stroke-width: 3px;
    stroke-linecap: round;
  }

  text {
    font-size: 15px;

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

export const ZoomButtonWrapper = styled.div`
  border-radius: 12px;
  cursor: pointer;
  background: ${appColors.primary};
  transform: scale(1.2, 1.2);
  display: flex;

  path {
    color: ${appColors.white};
  }

  &:hover {
    transform: scale(1.4, 1.4);
  }
`;
