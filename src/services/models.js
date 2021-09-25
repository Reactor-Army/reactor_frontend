import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const applyThomasModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/thomas/`;

  const client = new HttpClient(null);
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const applyAdamsBohartModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/adams-bohart/`;

  const client = new HttpClient(null);
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const applyYoonNelsonModel = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/yoon-nelson/`;

  const client = new HttpClient(null);
  return (await client.multiPartPost(endpoint, file, body)).data;
};

export const getTemplate = async () => {
  const client = new HttpClient(null);
  return (await client.get(`${settings.BACKEND_URL}curvas-ruptura/ejemplo/`))
    .data;
};
