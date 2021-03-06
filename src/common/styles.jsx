import styled from "styled-components/macro";

export const appColors = {
  primary: "#1177cf",
  white: "#fff",
  purple: "#ce93d8",
  lightOrange: "#ffcc80",
  black: "#000",
  lightGreen: "#21d133",
  opaqueGreen: "#4fd192",
  green: "#00a811",
  lightRed: "#fa7d7d",
  red: "#f51707",
  lightBlue: "#1072c7",
  darkBlue: "#0f6ebf",
  softGray: "#f7f7f7",
  lightGray: "#d1d1d1",
  gray: "#aaa",
  darkGray: "#666",
};

export const appFontColors = {
  white: "#fff",
  fontColorMenu: "#eeeeee",
  warning: "#ff2121",
};

export const appFontFamily = {
  lato: "Lato, sans-serif",
  roboto: "Roboto, Helvetica, Arial, sans-serif",
};

export const Row = styled.div`
  display: block;
  margin: 15px 0;
  font-weight: bold;
  font-family: ${appFontFamily.roboto};
  font-size: calc(25px + 0.7vw);
`;

export const Link = styled.a`
  color: ${appColors.primary};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  padding-bottom: 10px;
`;

export const PageHeaderContanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 500px) {
    padding: initial;
  }
`;

export const Icon = styled.img`
  max-width: calc(15px + 0.5vw);
  height: calc(15px + 0.5vw);
  margin: 0 5px 15px;
  cursor: pointer;
`;
