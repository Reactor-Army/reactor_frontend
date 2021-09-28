import {settings} from "../config/settings";
import {HttpClient} from "./http_client";
import store from "../redux/store";
import {login} from "../redux/auth";

export const loginService = async (email, password) => {
  const endpoint = `${settings.BACKEND_URL}auth/login`;
  const client = new HttpClient(null);
  const response = (await client.post(endpoint, {email, password})).data;
  if (response.status === 200) {
    const accessToken = response.accessToken;
    store.dispatch(login({userData: {email}, token: accessToken}));
  }
  return response;
};
