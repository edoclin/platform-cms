import axios from 'axios';
import {message} from "ant-design-vue";

axios.defaults.timeout = 1000 * 10;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code === 2000) {
        return Promise.resolve(response.data.data);
      } else {
        message.error(response.data.message)
        return Promise.reject(response.data.message)
      }
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export const _get = function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}
    ).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  });
}

export const _post = function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}

export const _put = function put(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}

export const _delete = function _delete(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
export const baseURL = axios.defaults.baseURL;
