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
  PROCESS_EFFECTIVE_VOLUME: "/sistemas/:id/volumen",
  BEST_ADSORBENT: "/mejor-adsorbente",
  NOT_FOUND: "/not-found",
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

export const processVolumeUrlFor = (processId) => {
  return processUrlId(URLS.PROCESS_EFFECTIVE_VOLUME, processId);
};
