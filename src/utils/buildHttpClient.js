import {HttpClient} from "../services/http_client";

let client = new HttpClient(null);

export const getHttpClient = () => {
  return client;
};

export const buildHttpClient = (token) => {
  client = new HttpClient(token);
  return client;
};
