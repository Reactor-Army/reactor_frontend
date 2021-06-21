import axios from "axios";

// Regalito de Contame
export class HttpClient {
  constructor(token) {
    this.token = token;
  }

  async get(url, params) {
    return await this.request(url, "GET", undefined, undefined, params);
  }

  async post(url, body) {
    return await this.request(url, "POST", body);
  }

  async delete(url, params) {
    return await this.request(url, "DELETE", params);
  }

  async request(url, method, data, headers, params) {
    headers = headers || {};
    headers = {
      ...headers,
      Authorization: `Bearer ${this.token}`,
      "Access-Control-Allow-Origin": "*",
    };
    return await axios.request({url, method, data, headers, params});
  }
}
