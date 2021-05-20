import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    margin: theme.spacing(3),
  },

  container: {
    paddingLeft: 0,
  },
}));

export const Root = styled.div`
  display: flex;
`;
