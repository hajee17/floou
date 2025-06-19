// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://floou.hafidzirham.com/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Interceptor untuk menyisipkan token ke header
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiClient;