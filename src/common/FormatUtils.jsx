import {UNITS} from "./fields";

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const nameAdsorbent = (adsorbent) => {
  return adsorbent.particulaT
    ? `${adsorbent.nombre} (${adsorbent.particulaT}) `
    : adsorbent.nombre;
};

export const qmaxIdealAdsorbent = (maxQmax) => {
  return `QMax Máximo: ${maxQmax} ${UNITS.QMAX}`;
};
