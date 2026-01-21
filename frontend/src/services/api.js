import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

// Stocks
export const getStocks = async () => {
  const response = await api.get('/stocks');
  return response.data;
};

export const getStock = async (symbol, options = {}) => {
  try {
    const response = await api.get(`/stocks/${symbol}`);
    return response.data;
  } catch (error) {
    if (options.suppress404 && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

// Crypto
export const getCrypto = async () => {
  const response = await api.get('/crypto');
  return response.data;
};

export const getCryptoBySymbol = async (symbol) => {
  const response = await api.get(`/crypto/${symbol}`);
  return response.data;
};

// Assets (combined stocks and crypto)
export const getAssets = async () => {
  const response = await api.get('/assets');
  return response.data;
};

// News
export const getNews = async () => {
  const response = await api.get('/news');
  return response.data;
};

// Portfolio
export const getPortfolio = async () => {
  const response = await api.get('/portfolio');
  return response.data;
};

// Alerts
export const getAlerts = async () => {
  const response = await api.get('/alerts');
  return response.data;
};

export default api;
