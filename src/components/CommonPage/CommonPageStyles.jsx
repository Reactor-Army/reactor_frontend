import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components/macro";

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

export const SidebarWrapper = styled.div`
  width: 240px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    all: initial;
  }
`;
