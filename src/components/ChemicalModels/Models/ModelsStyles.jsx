import styled from "styled-components/macro";
import {appColors} from "../../../common/styles";
import {makeStyles} from "@material-ui/core";

export const helpTextStyles = makeStyles(() => ({
  typography: {
    color: appColors.lightGray,
  },
}));

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsContainer = styled.div`
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
  width: calc(51% - 22px);
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 8px;
  margin-bottom: 25px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`;

export const DataFrameContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-row-gap: 10px;
`;

export const Title = styled.div`
  color: ${(props) => (props.color ? props.color : appColors.lightBlue)};
  font-size: calc(14px + 0.4vw);
  font-weight: bold;
  padding: 0 5px;
`;

export const DataFramesWrapper = styled.div`
  display: inline-flex;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
`;

const FormContainerWidth = 500;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: ${FormContainerWidth}px;
  ${(props) => props.height && `height: ${props.height};`}
  background: ${appColors.white};
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
  padding: 15px;

  @media (max-width: 700px) {
    background: ${appColors.pageBackground};
    box-shadow: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vh;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 700px) {
    padding: 15px;
  }
`;

export const TemplateHelpWrapper = styled.div`
  min-width: calc(85% - ${FormContainerWidth}px);
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 1200px) {
    display: none;
  }
  margin-left: 20px;
`;

export const LoaderWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
`;
