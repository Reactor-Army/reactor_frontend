import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getProcesses = async () => {
  const endpoint = `${settings.BACKEND_URL}proceso/`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};

export const searchProcesses = async (adsorbateId, adsorbentId) => {
  const endpoint = `${settings.BACKEND_URL}proceso/buscar/`;
  const client = new HttpClient(null);
  return (
    await client.get(endpoint, {
      idAdsorbato: adsorbateId || undefined,
      idAdsorbente: adsorbentId || undefined,
    })
  ).data;
};
