import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getAdsorbents = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbente/`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};
