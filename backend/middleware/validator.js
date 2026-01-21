import { AppError } from './errorHandler.js';

export const validatePagination = (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  
  if (isNaN(pageNum) || pageNum < 1) {
    throw new AppError('Invalid page number', 400);
  }
  
  if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
    throw new AppError('Invalid limit. Must be between 1 and 100', 400);
  }
  
  req.query.page = pageNum;
  req.query.limit = limitNum;
  
  next();
};

export const validateSort = (req, res, next) => {
  const { sortBy, order = 'asc' } = req.query;
  
  if (order && !['asc', 'desc'].includes(order.toLowerCase())) {
    throw new AppError('Invalid sort order. Must be "asc" or "desc"', 400);
  }
  
  req.query.order = order.toLowerCase();
  
  next();
};
