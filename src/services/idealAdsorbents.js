import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const searchIdealAdsorbents = async (adsorbatesIds) => {
  const endpoint = `${settings.BACKEND_URL}proceso/adsorbato/`;
  const client = new HttpClient(null);
  const body = {adsorbatos: adsorbatesIds};
  return (await client.post(endpoint, body)).data;
};
