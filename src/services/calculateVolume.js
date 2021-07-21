import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const calculateVolume = async (processId, body) => {
  const endpoint = `${settings.BACKEND_URL}proceso/${processId}/reactor/volumen/`;
  const client = new HttpClient(null);
  return (await client.post(endpoint, body)).data;
};
