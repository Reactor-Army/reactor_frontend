import React from "react";
import {Link} from "react-router-dom";
import {LinkContainer, LinkText, Container, Title} from "./Styles";

export const Sidebar = () => {
  return (
    <Container>
      <Title>Reactor App</Title>
      {Routes.map((route, index) => {
        return (
          <LinkContainer key={index}>
            <Link to={route.path} style={{textDecoration: "none"}}>
              <LinkText>{route.name}</LinkText>
            </Link>
          </LinkContainer>
        );
      })}
    </Container>
  );
};

const Routes = [
  {
    path: "/",
    name: "Inicio",
  },

  {
    path: "/adsorbatos",
    name: "Adsorbatos",
  },

  {
    path: "/adsorbentes",
    name: "Adsorbentes",
  },
];
