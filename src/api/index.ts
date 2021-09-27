import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl } from './constains';
import store from 'store';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const httpClient = axios.create(config);

httpClient.interceptors.request.use((config) => {
  const token = store.getState().session.accessToken;
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
