import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const getAdsorbents = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const searchAdsorbents = async (name) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/buscar/`;
  const client = getHttpClient();
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
    })
  ).data;
};

export const getAdsorbentsWithParticleSize = async (name) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/buscar/nombre`;
  const client = getHttpClient();
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
    })
  ).data;
};

export const getAdsorbent = async (adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const createAdsorbent = async (body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/`;
  const client = getHttpClient();
  return (await client.post(endpoint, body)).data;
};

export const editAdsorbent = async (adsorbentId, body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}`;
  const client = getHttpClient();
  return (await client.put(endpoint, body)).data;
};

export const getAdsorbentProcessCount = async (adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}/cantidad-procesos`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const deleteAdsorbent = async (adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}`;
  const client = getHttpClient();
  return (await client.delete(endpoint)).data;
};
