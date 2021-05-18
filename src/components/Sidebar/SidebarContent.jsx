import Container from "@material-ui/core/Container";
import {LinkContainer, LinkText, Title} from "./Styles";
import {routes} from "./sidebar_routes";
import {Link} from "react-router-dom";
import React from "react";

export const SidebarContent = () => {
  return (
    <Container>
      <Title>Reactor App</Title>
      {routes.map((route, index) => {
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
