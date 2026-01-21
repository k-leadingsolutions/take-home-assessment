import { aiInsights, influencers } from '../mockData.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { applyFilters, applySort } from '../utils/filters.js';
import { paginate } from '../utils/pagination.js';

export const getInsights = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, type, sentiment } = req.query;
  
  let insights = [...aiInsights];
  
  const filters = {};
  if (type) filters.type = type;
  if (sentiment) filters.sentiment = sentiment;
  
  insights = applyFilters(insights, filters);
  insights = applySort(insights, sortBy || 'createdAt', order || 'desc');
  
  const result = paginate(insights, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getInfluencers = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, specialty, platform } = req.query;
  
  let influencerList = [...influencers];
  
  const filters = {};
  if (specialty) filters.specialty = specialty;
  if (platform) filters.platform = platform;
  
  influencerList = applyFilters(influencerList, filters);
  influencerList = applySort(influencerList, sortBy || 'accuracy', order || 'desc');
  
  const result = paginate(influencerList, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});
