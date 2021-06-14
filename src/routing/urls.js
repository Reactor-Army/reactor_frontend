export const URLS = {
  HOME: "/",
  ADSORBATES_LIST: "/adsorbatos",
  ADSORBATE_DETAIL: "/adsorbatos/:id",
  ADSORBATE_CREATE: "/adsorbatos/agregar",
  ADSORBENTS_LIST: "/adsorbentes",
  ADSORBENT_DETAIL: "/adsorbentes/:id",
  ADSORBENT_CREATE: "/adsorbentes/agregar",
  PROCESSES_LIST: "/procesos",
  PROCESS_DETAIL: "/procesos/:id",
  BEST_ADSORBENT: "/mejor-adsorbente",
};

export const processDetailUrlFor = (processId) => {
  return URLS.PROCESS_DETAIL.replace(":id", processId);
};

export const adsorbateDetailUrlFor = (adsorbateId) => {
  return URLS.ADSORBATE_DETAIL.replace(":id", adsorbateId);
};

export const adsorbentDetailUrlFor = (adsorbentId) => {
  return URLS.ADSORBENT_DETAIL.replace(":id", adsorbentId);
};
