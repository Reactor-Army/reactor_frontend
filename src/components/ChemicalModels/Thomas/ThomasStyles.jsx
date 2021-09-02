import styled from "styled-components/macro";
import {appColors} from "../../../common/styles";

export const ThomasPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 60px;
  margin-bottom: 15px;
  margin-top: 20px;
`;

export const ThomasResultsContainer = styled.div`
  max-width: 100vw;
`;

export const PlotFrame = styled.div`
  max-width: 100vw;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  padding: 20px 80px;

  @media (max-width: 700px) {
    width: 97%;
    padding: 20px;
  }
`;

export const DataFrame = styled.div`
  min-width: 310px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 20px;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.div`
  color: ${appColors.lightBlue};
  font-size: calc(15px + 0.4vw);
  font-weight: bold;
`;

export const DataFramesWrapper = styled.div`
  display: inline-flex;
  gap: 15px;
  justify-content: center;

  @media (max-width: 700px) {
    width: 97%;
    flex-direction: column;
    align-items: center;
  }
`;
