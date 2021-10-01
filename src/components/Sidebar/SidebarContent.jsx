import Container from "@material-ui/core/Container";
import {Title} from "./Styles";
import {modelItems} from "./sidebar_routes";
import React from "react";
import {useHistory} from "react-router-dom";
import {SidebarItem} from "./SidebarItem";
import {SidebarTitle} from "./SidebarTitle";
import {ExpandableSidebarItem} from "../ExpandableSidebarItem/ExpandableSidebarItem";
import {URLS} from "../../routing/urls";

export const SidebarContent = ({handleDrawerToggle}) => {
  const history = useHistory();
  const navigateTo = (path) => {
    if (handleDrawerToggle) {
      handleDrawerToggle();
    }
    history.push(path);
  };

  const sideBarItems = [
    <SidebarItem text="Inicio" onClick={() => navigateTo(URLS.HOME)} key={0} />,
    <SidebarItem
      text="Sobre el proyecto"
      onClick={() => navigateTo(URLS.ABOUT_US)}
      key={1}
    />,
    <SidebarTitle text="Reactores discontinuos" key={2} />,
    <SidebarItem
      text="Adsorbatos"
      onClick={() => navigateTo(URLS.ADSORBATES_LIST)}
      key={3}
    />,
    <SidebarItem
      text="Adsorbentes"
      onClick={() => navigateTo(URLS.ADSORBENTS_LIST)}
      key={4}
    />,
    <SidebarItem
      text="Sistemas"
      onClick={() => navigateTo(URLS.PROCESSES_LIST)}
      key={5}
    />,
    <SidebarItem
      text="Buscar adsorbente"
      onClick={() => navigateTo(URLS.BEST_ADSORBENT)}
      key={6}
    />,
    <SidebarTitle text="Reactores continuos" key={7} />,
    <SidebarItem
      text="Volumen efluente"
      onClick={() => navigateTo(URLS.PROCESS_EFFLUENT_VOLUME)}
      key={8}
    />,
    <ExpandableSidebarItem
      title="Curvas de Ruptura"
      items={modelItems}
      onItemClick={(path) => {
        navigateTo(path);
      }}
      key={9}
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
