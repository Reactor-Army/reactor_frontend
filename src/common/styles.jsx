import styled from "styled-components/macro";

export const appColors = {
  primary: "#33c3f0",
  white: "#fff",
  adsorbentCardHeader: "#36ffb8",
  adsorbentCardBody: "#f7f7f7",
  adsorbateCardHeader: "#ce93d8",
  pageBackground: "#fff",
  gray: "#666",
};

export const appFontColors = {
  white: "#fff",
};

export const appFontFamily = {
  primary: "Lato, sans-serif",
  card: "Roboto, Helvetica, Arial, sans-serif",
};

export const Row = styled.div`
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: ${appFontFamily.card};
  font-size: 40px;
`;
