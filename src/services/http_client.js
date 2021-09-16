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
      return {
        data: {
          status: error.response.status,
          response: error.response.data,
        },
      };
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

  async multiPartPost(url, file, body) {
    const formData = new FormData();
    formData.append("observaciones", file);
    Object.keys(body).forEach((key) => {
      if (key != "observaciones") {
        formData.append(key, body[key]);
      }
    });
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return await axios.post(url, formData, config);
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
