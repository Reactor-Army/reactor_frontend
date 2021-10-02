import Container from "@material-ui/core/Container";
import {Title, SessionUser} from "./Styles";
import {modelItems} from "./sidebar_routes";
import React from "react";
import {useHistory} from "react-router-dom";
import {SidebarItem} from "./SidebarItem";
import {SidebarTitle} from "./SidebarTitle";
import {ExpandableSidebarItem} from "../ExpandableSidebarItem/ExpandableSidebarItem";
import {URLS} from "../../routing/urls";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../redux/auth";

export const SidebarContent = ({handleDrawerToggle}) => {
  const history = useHistory();
  const {loggedIn, userData} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigateTo = (path) => {
    if (handleDrawerToggle) {
      handleDrawerToggle();
    }
    history.push(path);
  };

  const sideBarItems = [
    <SessionUser key={0} loggedIn={loggedIn}>
      {loggedIn && userData.email}
    </SessionUser>,
    <SidebarItem text="Inicio" onClick={() => navigateTo(URLS.HOME)} key={1} />,
    <SidebarItem
      text="Sobre el proyecto"
      onClick={() => navigateTo(URLS.ABOUT_US)}
      key={2}
    />,
    <SidebarItem
      text={loggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
      onClick={
        loggedIn ? () => dispatch(logout()) : () => navigateTo(URLS.LOGIN)
      }
      key={3}
    />,
    <SidebarTitle text="Reactores discontinuos" key={4} />,
    <SidebarItem
      text="Adsorbatos"
      onClick={() => navigateTo(URLS.ADSORBATES_LIST)}
      key={5}
    />,
    <SidebarItem
      text="Adsorbentes"
      onClick={() => navigateTo(URLS.ADSORBENTS_LIST)}
      key={6}
    />,
    <SidebarItem
      text="Sistemas"
      onClick={() => navigateTo(URLS.PROCESSES_LIST)}
      key={7}
    />,
    <SidebarItem
      text="Buscar adsorbente"
      onClick={() => navigateTo(URLS.BEST_ADSORBENT)}
      key={8}
    />,
    <SidebarTitle text="Reactores continuos" key={9} />,
    <SidebarItem
      text="Volumen efluente"
      onClick={() => navigateTo(URLS.PROCESS_EFFLUENT_VOLUME)}
      key={10}
    />,
    <ExpandableSidebarItem
      title="Curvas de Ruptura"
      items={modelItems}
      onItemClick={(path) => {
        navigateTo(path);
      }}
      key={11}
    />,
  ];

  return (
    <Container>
      <Title>Reactor App</Title>
      {sideBarItems.map((item) => {
        return item;
      })}
    </Container>
  );
};
