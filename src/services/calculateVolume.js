import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const calculateVolume = async (processId, body) => {
  const endpoint = `${settings.BACKEND_URL}proceso/${processId}/reactor/volumen/`;
  const client = getHttpClient();
  return (await client.post(endpoint, body)).data;
};
