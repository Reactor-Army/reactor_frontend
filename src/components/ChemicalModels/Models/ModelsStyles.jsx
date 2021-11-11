import styled from "styled-components/macro";
import {appColors} from "../../../common/styles";
import {makeStyles} from "@material-ui/core";
import TabPanel from "@material-ui/lab/TabPanel";

export const helpTextStyles = makeStyles(() => ({
  typography: {
    color: appColors.gray,
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
  width: 49%;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 16px;
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
  width: 100%;
  flex-wrap: wrap;
  gap: 15px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 60px;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TabsContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledTabPanel = styled(TabPanel)`
  width: 49%;
  padding: initial;

  @media (max-width: 800px) {
    width: 100%;
  }

  & > div {
    width: 100%;
  }
`;

export const SystemTitle = styled(Title)`
  color: ${(props) => (props.color ? props.color : appColors.black)};
  font-size: calc(13px + 0.4vw);
`;
