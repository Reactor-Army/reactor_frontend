import {HttpClient} from "../services/http_client";

let client;

export const getHttpClient = () => {
  if (client === undefined) {
    throw new Error("HttpClient not initialized");
  }
  return client;
};

export const buildHttpClient = (token) => {
  client = new HttpClient(token);

  console.log(`HTTP client creado con token: ${token}`);
  return client;
};
