import {settings} from "../config/settings";
import {HttpClient} from "./http_client";
import store from "../redux/store";
import {login} from "../redux/auth";

export const loginService = async (email, password) => {
  const endpoint = `${settings.BACKEND_URL}auth/login`;
  const client = new HttpClient(null);
  const {data, status} = await client.post(endpoint, {email, password});
  if (status === 200) {
    const accessToken = data.accessToken;
    const {email, nombre, apellido, descripcion} = data.user;
    store.dispatch(
      login({
        userData: {email, nombre, apellido, descripcion},
        token: accessToken,
      }),
    );
  }
  return data;
};
