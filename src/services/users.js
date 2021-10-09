import {settings} from "../config/settings";
import {getHttpClient} from "../utils/buildHttpClient";

export const getUsers = async () => {
  const endpoint = `${settings.BACKEND_URL}auth/users`;
  const client = getHttpClient();
  const response = await client.get(endpoint);
  return response.data;
};

export const createUser = async (body) => {
  const endpoint = `${settings.BACKEND_URL}auth/users/`;
  const client = getHttpClient();
  return (await client.post(endpoint, body)).data;
};

export const getUser = async (userId) => {
  const endpoint = `${settings.BACKEND_URL}auth/users/${userId}`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const getRoles = async () => {
  const endpoint = `${settings.BACKEND_URL}auth/roles/`;
  const client = getHttpClient();
  return (await client.get(endpoint)).data;
};

export const editUser = async (userId, body) => {
  const endpoint = `${settings.BACKEND_URL}auth/users/${userId}`;
  const client = getHttpClient();
  return (await client.put(endpoint, body)).data;
};
