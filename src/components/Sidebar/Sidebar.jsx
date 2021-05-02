import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";

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

const LinkContainer = (props) => {
  return <div className="link-container">{props.children}</div>;
};

const LinkText = (props) => {
  return <div className="nav-link">{props.children}</div>;
};

const Container = (props) => {
  return <div className="nav-menu">{props.children}</div>;
};

const Title = (props) => {
  return <div className="nav-title">{props.children}</div>;
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
