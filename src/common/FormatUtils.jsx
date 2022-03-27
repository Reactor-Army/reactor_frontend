import {UNITS} from "./fields";

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const nameAdsorbent = (adsorbent) => {
  return adsorbent.particulaT
    ? `${adsorbent.nombre} (${adsorbent.particulaT}) ${UNITS.PARTICLE_SIZE} `
    : adsorbent.nombre;
};

export const qmaxIdealAdsorbent = (maxQmax) => {
  return `QMax Máximo: ${maxQmax} ${UNITS.QMAX}`;
};

export const formatDate = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    const minutes = date.getMinutes();
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}, ${date.getHours()}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
  }
  return;
};
