export const URLS = {
  HOME: "/",
  ADSORBATES_LIST: "/adsorbatos",
  ADSORBATE_DETAIL: "/adsorbatos/:id",
  ADSORBENTS_LIST: "/adrosbentes",
  PROCESSES_LIST: "/procesos",
  PROCESS_DETAIL: "/procesos/:id",
  BEST_ADSORBENT: "/mejor-adsorbente",
};

export const processDetailUrlFor = (processId) => {
  return URLS.PROCESS_DETAIL.replace(":id", processId);
};
