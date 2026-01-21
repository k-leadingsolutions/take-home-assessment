import * as alertService from '../services/alertService.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { applyFilters, applySort } from '../utils/filters.js';
import { paginate } from '../utils/pagination.js';

export const getAlerts = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order, severity, type, isActive } = req.query;
  
  let alerts = alertService.getAllAlerts();
  
  const filters = {};
  if (severity) filters.severity = severity;
  if (type) filters.type = type;
  if (isActive !== undefined) filters.isActive = isActive === 'true';
  
  alerts = applyFilters(alerts, filters);
  alerts = applySort(alerts, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(alerts, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getCriticalAlerts = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, order } = req.query;
  
  let alerts = alertService.getCriticalAlerts();
  
  alerts = applySort(alerts, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(alerts, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getAlertsBySeverity = asyncHandler(async (req, res) => {
  const { severity } = req.params;
  const { page, limit, sortBy, order } = req.query;
  
  let alerts = alertService.getAlertsBySeverity(severity);
  
  alerts = applySort(alerts, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(alerts, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getAlertsByAsset = asyncHandler(async (req, res) => {
  const { symbol } = req.params;
  const { page, limit, sortBy, order } = req.query;
  
  let alerts = alertService.getAlertsByAsset(symbol);
  
  alerts = applySort(alerts, sortBy || 'timestamp', order || 'desc');
  
  const result = paginate(alerts, page, limit);
  
  res.json({
    success: true,
    count: result.data.length,
    pagination: result.pagination,
    data: result.data
  });
});

export const getAlertStats = asyncHandler(async (req, res) => {
  const stats = alertService.getAlertStats();
  
  res.json({
    success: true,
    data: stats
  });
});
