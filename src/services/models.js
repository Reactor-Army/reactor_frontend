import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const applyThomasModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/thomas/`;

  const client = getHttpClient();
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const applyAdamsBohartModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/adams-bohart/`;

  const client = getHttpClient();
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const applyYoonNelsonModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/yoon-nelson/`;

  const client = getHttpClient();
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const getModelData = async (model) => {
  let endpoint = "";

  switch (model) {
    case "thomas":
      endpoint = `${settings.BACKEND_URL}curvas-ruptura/thomas/`;
      break;
    case "adams-bohart":
      endpoint = `${settings.BACKEND_URL}curvas-ruptura/adams-bohart/`;
      break;
    default:
      endpoint = `${settings.BACKEND_URL}curvas-ruptura/yoon-nelson/`;
  }
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};
