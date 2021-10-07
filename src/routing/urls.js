export const URLS = {
  HOME: "/",
  ADSORBATES_LIST: "/adsorbatos",
  ADSORBATE_DETAIL: "/adsorbatos/:id",
  ADSORBATE_CREATE: "/adsorbatos/agregar",
  ADSORBATE_EDIT: "/adsorbatos/:id/modificar",
  ADSORBENTS_LIST: "/adsorbentes",
  ADSORBENT_DETAIL: "/adsorbentes/:id",
  ADSORBENT_CREATE: "/adsorbentes/agregar",
  ADSORBENT_EDIT: "/adsorbentes/:id/modificar",
  PROCESSES_LIST: "/sistemas",
  PROCESS_DETAIL: "/sistemas/:id",
  PROCESS_CREATE: "/sistemas/agregar",
  PROCESS_EDIT: "/sistemas/:id/modificar",
  PROCESS_EFFLUENT_VOLUME: "/sistemas/volumen",
  BEST_ADSORBENT: "/mejor-adsorbente",
  THOMAS: "/modelos/thomas",
  ADAMS_BOHART: "/modelos/adams-bohart",
  YOON_NELSON: "/modelos/yoon-nelson",
  MODEL_SELECTION: "/modelos",
  NOT_FOUND: "/not-found",
  ABOUT_US: "/about-us",
  LOGIN: "/login",
  USERS: "/usuarios",
  USER_CREATE: "/usuarios/agregar",
  USER_EDIT: "/usuarios/:id/modificar",
};

const processUrlId = (url, id) => {
  return url.replace(":id", id);
};

export const adsorbateEditUrlFor = (adsorbateId) => {
  return processUrlId(URLS.ADSORBATE_EDIT, adsorbateId);
};

export const processDetailUrlFor = (processId) => {
  return processUrlId(URLS.PROCESS_DETAIL, processId);
};

export const processEditUrlFor = (processId) => {
  return processUrlId(URLS.PROCESS_EDIT, processId);
};

export const adsorbateDetailUrlFor = (adsorbateId) => {
  return processUrlId(URLS.ADSORBATE_DETAIL, adsorbateId);
};

export const adsorbentDetailUrlFor = (adsorbentId) => {
  return processUrlId(URLS.ADSORBENT_DETAIL, adsorbentId);
};

export const adsorbentEditUrlFor = (adsorbentId) => {
  return processUrlId(URLS.ADSORBENT_EDIT, adsorbentId);
};

export const userEditUrlFor = (userId) => {
  console.log("sadasdsa");
  return processUrlId(URLS.USER_EDIT, userId);
};
