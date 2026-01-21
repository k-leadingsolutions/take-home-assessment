import * as newsService from '../services/newsService.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { applyFilters, applySort } from '../utils/filters.js';
import { paginate } from '../utils/pagination.js';

export const getNews = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, category, sentiment, impact } = req.query;
  
  let news = newsService.getAllNews();
  
  const filters = {};
  if (category) filters.category = category;
  if (sentiment) filters.sentiment = sentiment;
  if (impact) filters.impact = impact;
  
  news = applyFilters(news, filters);
  news = applySort(news, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(news, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getNewsByAsset = asyncHandler(async (req, res) => {
  const { symbol } = req.params;
  const { page, limit, sortBy, order } = req.query;
  
  let news = newsService.getNewsByAsset(symbol);
  
  news = applySort(news, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(news, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getNewsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { page, limit, sortBy, order } = req.query;
  
  let news = newsService.getNewsByCategory(category);
  
  news = applySort(news, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(news, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getNewsStats = asyncHandler(async (req, res) => {
  const stats = newsService.getNewsStats();
  
  res.json({
    success: true,
    data: stats
  });
});
