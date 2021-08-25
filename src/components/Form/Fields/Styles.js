import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";

export const fileFieldStyles = makeStyles({
  textField: {
    minWidth: "80%",
  },
  dummyInput: {
    display: "none",
  },
  label: {height: "100%", marginLeft: 15, textAlign: "center"},
});

export const uploadButtonStyles = makeStyles({
  button: {
    height: "100%",
  },
});

export const FileFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
