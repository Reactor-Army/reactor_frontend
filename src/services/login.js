import {settings} from "../config/settings";
import {HttpClient} from "./http_client";
import store from "../redux/store";
import {login} from "../redux/auth";
import {buildHttpClient} from "../utils/buildHttpClient";

export const loginService = async (email, password) => {
  const endpoint = `${settings.BACKEND_URL}auth/login`;
  const client = new HttpClient(null);
  const {data, status} = await client.post(endpoint, {email, password});
  if (status === 200) {
    const accessToken = data.accessToken;
    store.dispatch(login({userData: {email}, token: accessToken}));
    buildHttpClient(accessToken);
  }
  return data;
};
