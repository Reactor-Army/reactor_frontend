import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getAdsorbates = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};

export const searchAdsorbates = async (name, charge) => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/search/`;
  const client = new HttpClient(null);
  return (
    await client.get(endpoint, {
      nombre: name || undefined,
      cargaIon: charge || undefined,
    })
  ).data;
};
