import Container from "@material-ui/core/Container";
import {LinkContainer, LinkText, Title} from "./Styles";
import {routes} from "./sidebar_routes";
import React from "react";
import {useHistory} from "react-router-dom";

export const SidebarContent = ({handleDrawerToggle}) => {
  const history = useHistory();
  const onClick = (path) => {
    if (handleDrawerToggle) {
      handleDrawerToggle();
    }
    history.push(path);
  };

  return (
    <Container>
      <Title>Reactor App</Title>
      {routes.map((route, index) => {
        return (
          <LinkContainer key={index} onClick={() => onClick(route.path)}>
            <LinkText>{route.name}</LinkText>
          </LinkContainer>
        );
      })}
    </Container>
  );
};
