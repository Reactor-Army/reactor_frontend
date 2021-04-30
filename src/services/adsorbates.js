import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getAdsorbates = async () => {
  const endpoint = `${settings.BACKEND_URL}adsorbato/`;
  const client = new HttpClient(null);
  return (await client.get(endpoint)).data;
};
