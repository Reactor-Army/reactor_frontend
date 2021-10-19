import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components/macro";

export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginTop: theme.spacing(5),
    padding: "0 16px",

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
}));

export const SidebarWrapper = styled.div`
  width: 240px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    all: initial;
  }
`;

export const Container = styled.div`
  width: 100vw;
`;
