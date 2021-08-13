import axios from "axios";

// Regalito de Contame
export class HttpClient {
  constructor(token) {
    this.token = token;
  }

  async get(url, params) {
    const response = await this.request(
      url,
      "GET",
      undefined,
      undefined,
      params,
    ).catch((error) => {
      return {data: error.response.status};
    });
    return response;
  }

  async post(url, body) {
    return await this.request(url, "POST", body);
  }

  async delete(url, params) {
    return await this.request(url, "DELETE", params);
  }

  async put(url, body) {
    return await this.request(url, "PUT", body);
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
