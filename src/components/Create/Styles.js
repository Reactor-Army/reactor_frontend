import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

export const CreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export const FormItemContainer = styled.div`
  margin: 10px;
`;

export const useStyles = makeStyles(() => ({
  button: {
    margin: 10,
  },
  textInput: {
    maxWidth: 200,
  },
}));
