import * as assetService from '../services/assetService.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { applyFilters, applySort } from '../utils/filters.js';
import { paginate } from '../utils/pagination.js';

export const getAssets = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, type, sentiment } = req.query;
  
  let assets = assetService.getAllAssets();
  
  const filters = {};
  if (type) filters.type = type;
  if (sentiment) filters.sentiment = sentiment;
  
  assets = applyFilters(assets, filters);
  assets = applySort(assets, sortBy, order);
  
  const result = paginate(assets, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getStocks = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, sentiment } = req.query;
  
  let stocks = assetService.getStocks();
  
  const filters = {};
  if (sentiment) filters.sentiment = sentiment;
  
  stocks = applyFilters(stocks, filters);
  stocks = applySort(stocks, sortBy, order);
  
  const result = paginate(stocks, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getStockBySymbol = asyncHandler(async (req, res) => {
  const { symbol } = req.params;
  const asset = assetService.getAssetBySymbol(symbol);
  
  if (asset.type !== 'stock') {
    return res.status(404).json({
      success: false,
      error: 'Stock not found'
    });
  }
  
  res.json({
    success: true,
    data: asset
  });
});

export const getCrypto = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, sentiment } = req.query;
  
  let crypto = assetService.getCrypto();
  
  const filters = {};
  if (sentiment) filters.sentiment = sentiment;
  
  crypto = applyFilters(crypto, filters);
  crypto = applySort(crypto, sortBy, order);
  
  const result = paginate(crypto, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getCryptoBySymbol = asyncHandler(async (req, res) => {
  const { symbol } = req.params;
  const asset = assetService.getAssetBySymbol(symbol);
  
  if (asset.type !== 'crypto') {
    return res.status(404).json({
      success: false,
      error: 'Cryptocurrency not found'
    });
  }
  
  res.json({
    success: true,
    data: asset
  });
});

export const getAssetHistory = asyncHandler(async (req, res) => {
  const { symbol } = req.params;
  const { days } = req.query;
  
  const history = assetService.getAssetHistory(symbol, days);
  
  res.json({
    success: true,
    data: history
  });
});

export const getAssetStats = asyncHandler(async (req, res) => {
  const stats = assetService.getAssetStats();
  
  res.json({
    success: true,
    data: stats
  });
});
