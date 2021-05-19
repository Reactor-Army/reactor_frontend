import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";
import {makeStyles} from "@material-ui/core/styles";

export const SearchContainer = styled.div`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%);
  background-color: ${appColors.primary};
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.white};
  font-size: 16px;
  border-radius: 4px;
  width: 100px;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #22d0f7;
  }

  &:active {
    background-color: ${appColors.primary};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useStyles = makeStyles({
  button: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
    marginTop: "10px",
  },
});
