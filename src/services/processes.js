import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const getProcesses = async () => {
  const endpoint = `${settings.BACKEND_URL}proceso/`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const searchProcesses = async (adsorbateId, adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}proceso/buscar/`;
  const client = getHttpClient();
  return (
    await client.get(endpoint, {
      idAdsorbato: adsorbateId || undefined,
      idAdsorbente: adsorbentId || undefined,
    })
  ).data;
};

// SE USA EN AMBOS
export const getProcess = async (processId) => {
  const endpoint = `${settings.BACKEND_URL}proceso/${processId}/`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const createSystem = async (body) => {
  const endpoint = `${settings.BACKEND_URL}proceso/`;
  const client = getHttpClient();
  return (await client.post(endpoint, body)).data;
};

export const updateSystem = async (processId, body) => {
  const endpoint = `${settings.BACKEND_URL}proceso/${processId}`;
  const client = getHttpClient();
  return (await client.put(endpoint, body)).data;
};

export const deleteProcess = async (processId) => {
  const endpoint = `${settings.BACKEND_URL}proceso/${processId}/`;
  const client = getHttpClient();
  return (await client.delete(endpoint)).data;
};
