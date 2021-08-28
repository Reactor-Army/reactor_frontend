import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const thomas = async (file, body) => {
  const endpoint = `${settings.BACKEND_URL}curvas-ruptura/thomas/`;

  const client = new HttpClient(null);
  return (await client.multiPartPost(endpoint, file, body)).data;
};
