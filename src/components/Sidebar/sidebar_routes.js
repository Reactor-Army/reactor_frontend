// Routes shown on the Sidebar, with display name and path
import {URLS} from "../../routing/urls";

export const routes = [
  {
    path: URLS.HOME,
    text: "Inicio",
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
    text: "Procesos",
  },
  {
    path: URLS.BEST_ADSORBENT,
    text: "Buscar adsorbente",
  },
];