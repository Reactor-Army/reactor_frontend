import Container from "@material-ui/core/Container";
import {Title} from "./Styles";
import {routes} from "./sidebar_routes";
import React from "react";
import {useHistory} from "react-router-dom";
import {SidebarItem} from "./SidebarItem";

export const SidebarContent = ({handleDrawerToggle}) => {
  const history = useHistory();
  const navigateTo = (path) => {
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
          <SidebarItem
            key={index}
            text={route.text}
            onClick={() => navigateTo(route.path)}
          />
        );
      })}
    </Container>
  );
};
