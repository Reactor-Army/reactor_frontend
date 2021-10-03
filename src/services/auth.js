import {settings} from "../config/settings";
import {HttpClient} from "./http_client";

export const getUsers = async () => {
  const endpoint = `${settings.BACKEND_URL}auth/users`;
  const client = new HttpClient(null);
  const {data, status} = await client.get(endpoint);
  if (status === 200) {
    console.log(data);
  }
  return data;
};
