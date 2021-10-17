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
  height: 55px;

  &:hover {
    background-color: #22d0f7;
    cursor: pointer;
  }

  &:active {
    background-color: ${appColors.primary};
  }

  @media (max-width: 850px) {
    height: 50px;
    width: 100%;
    position: relative;
    top: 22%;
    transform: translateY(-50%);
    margin-left: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 15px;
  background: ${appColors.white};
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 20%);
  align-items: center;
  padding: 16px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 50px 16px 0;
    justify-content: center;
    max-width: 450px;
  }

  @media (max-width: 500px) {
    margin: initial;
    margin-bottom: 15px;
  }
`;

export const useStyles = makeStyles({
  button: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 15px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
    marginTop: "10px",
  },
});

export const getTextFieldStyles = (responsiveMode) => {
  if (responsiveMode) {
    return {
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      marginBottom: "5px",
      width: "100%",
    };
  }
  return {marginRight: "20px"};
};

export const SearchBarContainerStyles = {
  minWidth: "200px",
};

export const getAutoCompleteFieldStyles = (responsiveMode) => {
  if (responsiveMode) {
    return {
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      width: "100%",
      marginBottom: "5px",
    };
  }
  return {width: "260px", marginRight: "20px"};
};
