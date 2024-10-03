/* eslint-disable */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://0ftrfsdb.xyz/mkt/api/v1/', 
  timeout: 10000
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
