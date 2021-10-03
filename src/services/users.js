import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const getUsers = async () => {
  const endpoint = `${settings.BACKEND_URL}auth/users`;
  const client = getHttpClient();
  return await client.get(endpoint);
};
