import axios from "axios";
import {setForceLogout} from "../redux/auth";

// Regalito de Contame
export class HttpClient {
  constructor(token) {
    this.token = token;
  }

  injectStore(store) {
    this.store = store;
  }

  resetToken() {
    this.token = null;
  }

  async get(url, params) {
    const response = await this.request(
      url,
      "GET",
      undefined,
      undefined,
      params,
    ).catch((error) => {
      if (this.token && [401, 403].includes(error.response.status)) {
        this.store.dispatch(setForceLogout());
      }
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
    return await this.request(url, "POST", body).catch((error) => {
      if (this.token && [401, 403].includes(error.response.status)) {
        this.store.dispatch(setForceLogout());
      }

      return {
        data: {
          status: error.response.status,
          response: error.response.data,
        },
      };
    });
  }

  async delete(url, params) {
    return await this.request(url, "DELETE", params).catch((error) => {
      if (this.token && [401, 403].includes(error.response.status)) {
        this.store.dispatch(setForceLogout());
      }

      return {
        data: {
          status: error.response.status,
          response: error.response.data,
        },
      };
    });
  }

  async put(url, body) {
    return await this.request(url, "PUT", body).catch((error) => {
      if ([401, 403].includes(error.response.status)) {
        this.store.dispatch(setForceLogout());
      }

      return {
        data: {
          status: error.response.status,
          response: error.response.data,
        },
      };
    });
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
      "Access-Control-Allow-Origin": "*",
    };
    if (this.token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${this.token}`,
      };
    }
    return await axios.request({url, method, data, headers, params});
  }
}
