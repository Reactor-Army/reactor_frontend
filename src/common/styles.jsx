import styled from "styled-components/macro";

export const appColors = {
  primary: "#1177cf",
  white: "#fff",
  adsorbentCardHeader: "#69f0ae",
  adsorbentCardBody: "#f7f7f7",
  adsorbateCardHeader: "#b388ff",
  processCardHeader: "#9e9e9e",
  idealAdsorbentAccordionHeader: "#e0e0e0",
  idealAdsorbentQmaxChip: "#ffcc80",
  idealAdsorbentRemoveAllChip: "#ce93d8",
  pageBackground: "#eeeeee",
  gray: "#666",
};

export const appFontColors = {
  white: "#fff",
  fontColorMenu: "#eeeeee",
  warning: "#ff2121",
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

export const Link = styled.a`
  color: ${appColors.primary};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  padding-bottom: 10px;
`;
