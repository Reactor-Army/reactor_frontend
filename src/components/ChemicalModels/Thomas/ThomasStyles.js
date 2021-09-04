import styled from "styled-components/macro";
import {makeStyles} from "@material-ui/core";
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

export const helpTextStyles = makeStyles(() => ({
  typography: {
    color: appColors.lightGray,
  },
}));
