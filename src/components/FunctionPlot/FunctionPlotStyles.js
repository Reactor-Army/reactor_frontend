import styled from "styled-components/macro";

export const ZoomIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
