import { allAssets, stocks, crypto } from '../mockData.js';
import { AppError } from '../middleware/errorHandler.js';

export const getAllAssets = () => {
  return allAssets;
};

export const getStocks = () => {
  return stocks;
};

export const getCrypto = () => {
  return crypto;
};

export const getAssetBySymbol = (symbol) => {
  const asset = allAssets.find(a => a.symbol === symbol.toUpperCase());
  
  if (!asset) {
    throw new AppError(`Asset with symbol ${symbol} not found`, 404);
  }
  
  return asset;
};

export const getAssetHistory = (symbol, days = 30) => {
  const asset = getAssetBySymbol(symbol);
  
  return {
    symbol: asset.symbol,
    name: asset.name,
    history: asset.priceHistory || []
  };
};

export const getAssetStats = () => {
  const totalAssets = allAssets.length;
  const totalStocks = stocks.length;
  const totalCrypto = crypto.length;
  
  const avgChange = allAssets.reduce((sum, asset) => sum + asset.changePercent, 0) / totalAssets;
  
  const topGainer = [...allAssets].sort((a, b) => b.changePercent - a.changePercent)[0];
  const topLoser = [...allAssets].sort((a, b) => a.changePercent - b.changePercent)[0];
  
  return {
    totalAssets,
    totalStocks,
    totalCrypto,
    avgChange: parseFloat(avgChange.toFixed(2)),
    topGainer: {
      symbol: topGainer.symbol,
      name: topGainer.name,
      change: topGainer.changePercent
    },
    topLoser: {
      symbol: topLoser.symbol,
      name: topLoser.name,
      change: topLoser.changePercent
    }
  };
};
