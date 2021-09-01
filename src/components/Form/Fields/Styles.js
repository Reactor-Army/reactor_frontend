import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";

export const fileFieldStyles = makeStyles({
  textField: {
    width: "80%",
  },
  dummyInput: {
    display: "none",
  },
  label: {height: 56, marginLeft: 15, textAlign: "center"},
});

export const numericFieldStyles = makeStyles({
  textField: {
    height: 60,
  },
});

export const uploadButtonStyles = makeStyles({
  button: {
    height: 56,
  },
});

export const FileFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
