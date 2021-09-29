import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const getAdsorbates = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const searchAdsorbates = async (name, charge) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/buscar/`;
  const client = getHttpClient();
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
      cargaIon: charge || undefined,
    })
  ).data;
};

export const getAdsorbatesWithIupacNotation = async (name) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/buscar/nombre`;
  const client = getHttpClient();
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
    })
  ).data;
};

export const getAdsorbate = async (adsorbateId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/${adsorbateId}`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const getAdsorbateProcessCount = async (adsorbateId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/${adsorbateId}/cantidad-procesos`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const createAdsorbate = async (body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/`;
  const client = getHttpClient();
  return (await client.post(endpoint, body)).data;
};

export const deleteAdsorbate = async (adsorbateId) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/${adsorbateId}`;
  const client = getHttpClient();
  return (await client.delete(endpoint)).data;
};

export const editAdsorbate = async (adsorbateId, body) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/${adsorbateId}`;
  const client = getHttpClient();
  return (await client.put(endpoint, body)).data;
};
