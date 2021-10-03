import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {appFontFamily} from "../../common/styles";
export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    margin: theme.spacing(1),
  },

  container: {
    paddingLeft: 0,
  },
}));

export const Root = styled.div`
  display: flex;
`;

export const SessionIndicatorContainer = styled.div`
  display: flex;
`;

export const SessionIndicatorLabel = styled.div`
  font-weight: bold;
  font-family: ${appFontFamily.card};
  font-size: calc(10px + 0.4vw);
  margin-right: 5px;
  @media (max-width: 600px) {
    display: none;
    font-size: calc(12px + 0.4vw);
  }
`;

export const SessionIndicator = styled.div`
  font-family: ${appFontFamily.card};
  font-size: calc(10px + 0.4vw);
  @media (max-width: 600px) {
    font-size: calc(12px + 0.4vw);
  }
`;
