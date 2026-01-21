const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  // Stocks
  getStocks: async () => {
    const response = await fetch(`${API_BASE_URL}/api/stocks`);
    return response.json();
  },

  getStock: async (symbol) => {
    const response = await fetch(`${API_BASE_URL}/api/stocks/${symbol}`);
    return response.json();
  },

  // Cryptocurrencies
  getCrypto: async () => {
    const response = await fetch(`${API_BASE_URL}/api/crypto`);
    return response.json();
  },

  getCryptoBySymbol: async (symbol) => {
    const response = await fetch(`${API_BASE_URL}/api/crypto/${symbol}`);
    return response.json();
  },

  // News
  getNews: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = queryParams ? `${API_BASE_URL}/api/news?${queryParams}` : `${API_BASE_URL}/api/news`;
    const response = await fetch(url);
    return response.json();
  },

  getNewsById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/news/${id}`);
    return response.json();
  },

  // Alerts
  getAlerts: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = queryParams ? `${API_BASE_URL}/api/alerts?${queryParams}` : `${API_BASE_URL}/api/alerts`;
    const response = await fetch(url);
    return response.json();
  },

  // AI Insights
  getInsights: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = queryParams ? `${API_BASE_URL}/api/insights?${queryParams}` : `${API_BASE_URL}/api/insights`;
    const response = await fetch(url);
    return response.json();
  },

  // Market Summary
  getMarketSummary: async () => {
    const response = await fetch(`${API_BASE_URL}/api/market/summary`);
    return response.json();
  }
};
