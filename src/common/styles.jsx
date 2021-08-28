import styled from "styled-components/macro";

export const appColors = {
  primary: "#1177cf",
  lightBlue: "#1072c7",
  white: "#fff",
  adsorbentCardHeader: "#69f0ae",
  adsorbentCardBody: "#f7f7f7",
  adsorbateCardHeader: "#b388ff",
  processCardHeader: "#9e9e9e",
  idealAdsorbentAccordionHeader: "#e0e0e0",
  idealAdsorbentQmaxChip: "#ffcc80",
  idealAdsorbentRemoveAllChip: "#ce93d8",
  pageBackground: "#f7f7f7",
  gray: "#666",
  lightGray: "#aaa",
  black: "#000",
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

export const PageHeaderContanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
