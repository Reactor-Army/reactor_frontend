// Routes shown on the Sidebar, with display name and path
import {URLS} from "../../routing/urls";

export const routes = [
  {
    path: URLS.HOME,
    text: "Inicio",
  },
  {
    path: URLS.ABOUT_US,
    text: "Sobre el proyecto",
  },
  {
    text: "Reactores discontinuos",
  },
  {
    path: URLS.ADSORBATES_LIST,
    text: "Adsorbatos",
  },

  {
    path: URLS.ADSORBENTS_LIST,
    text: "Adsorbentes",
  },

  {
    path: URLS.PROCESSES_LIST,
    text: "Sistemas",
  },
  {
    path: URLS.BEST_ADSORBENT,
    text: "Buscar adsorbente",
  },
  {
    text: "Reactores continuos",
  },
  {
    path: URLS.THOMAS,
    text: "Modelo de Thomas",
  },
  {
    path: URLS.ADAMS_BOHART,
    text: "Modelo de Adams-Bohart",
  },
  {
    path: URLS.YOON_NELSON,
    text: "Modelo de Yoon-Nelson",
  },
];
