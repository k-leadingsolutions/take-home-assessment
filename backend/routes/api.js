import { mockStocks, mockCrypto, mockNews, mockPortfolio, mockAlerts } from '../data/mockData.js';

// Stock routes
export function stocksRouter(req, res) {
  res.json({ success: true, data: mockStocks });
}

export function stockBySymbol(req, res) {
  const { symbol } = req.params;
  const stock = mockStocks.find(s => s.symbol.toUpperCase() === symbol.toUpperCase());
  
  if (!stock) {
    return res.status(404).json({ success: false, error: 'Stock not found' });
  }
  
  res.json({ success: true, data: stock });
}

// Crypto routes
export function cryptoRouter(req, res) {
  res.json({ success: true, data: mockCrypto });
}

export function cryptoBySymbol(req, res) {
  const { symbol } = req.params;
  const crypto = mockCrypto.find(c => c.symbol.toUpperCase() === symbol.toUpperCase());
  
  if (!crypto) {
    return res.status(404).json({ success: false, error: 'Cryptocurrency not found' });
  }
  
  res.json({ success: true, data: crypto });
}

// News routes
export function newsRouter(req, res) {
  res.json({ success: true, data: mockNews });
}

// Portfolio routes
export function portfolioRouter(req, res) {
  res.json({ success: true, data: mockPortfolio });
}

// Alerts routes
export function alertsRouter(req, res) {
  res.json({ success: true, data: mockAlerts });
}

// Assets route (combines stocks and crypto)
export function assetsRouter(req, res) {
  const assets = [
    ...mockStocks.map(s => ({ ...s, type: 'stock' })),
    ...mockCrypto.map(c => ({ ...c, type: 'crypto' }))
  ];
  res.json({ success: true, data: assets });
}
