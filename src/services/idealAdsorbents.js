import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const searchIdealAdsorbents = async (adsorbatesIds) => {
  const endpoint = `${settings.BACKEND_URL}proceso/adsorbato/`;
  const client = getHttpClient();
  const body = {adsorbatos: adsorbatesIds};
  return (await client.post(endpoint, body)).data;
};
