import React from "react";
import {Container} from "./Styles";
import {createGlobalStyle} from "styled-components/macro";

export const PageContainer = (props) => {
  return (
    <>
      <GlobalStyle />
      <Container>{props.children}</Container>
    </>
  );
};

//This removes the margin from the html body, otherwise a white margin appears
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;
