import { marketEvents } from '../mockData.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { applyFilters, applySort } from '../utils/filters.js';
import { paginate } from '../utils/pagination.js';

export const getEvents = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, type, importance } = req.query;
  
  let events = [...marketEvents];
  
  const filters = {};
  if (type) filters.type = type;
  if (importance) filters.importance = importance;
  
  events = applyFilters(events, filters);
  events = applySort(events, sortBy || 'date', order || 'asc');
  
  const result = paginate(events, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getUpcomingEvents = asyncHandler(async (req, res) => {
  const { page, limit, days = 30 } = req.query;
  
  const now = new Date();
  const futureDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  
  let events = marketEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now && eventDate <= futureDate;
  });
  
  events = applySort(events, 'date', 'asc');
  
  const result = paginate(events, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});
