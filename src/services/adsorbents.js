import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getAdsorbents = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};

export const searchAdsorbents = async (name) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/buscar/`;
  const client = new HttpClient(null);
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
    })
  ).data;
};

export const getAdsorbentsWithParticleSize = async (name) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/buscar/nombre`;
  const client = new HttpClient(null);
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
    })
  ).data;
};

export const getAdsorbent = async (adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};

export const createAdsorbent = async (body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/`;
  const client = new HttpClient(null);
  return (await client.post(endpoint, body)).data;
};

export const editAdsorbent = async (adsorbentId, body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/${adsorbentId}`;
  const client = new HttpClient(null);
  return (await client.put(endpoint, body)).data;
};
