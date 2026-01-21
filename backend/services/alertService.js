import { alerts } from '../mockData.js';
import { AppError } from '../middleware/errorHandler.js';

export const getAllAlerts = () => {
  return alerts;
};

export const getCriticalAlerts = () => {
  return alerts.filter(alert => 
    alert.severity === 'critical' && alert.isActive
  );
};

export const getAlertsBySeverity = (severity) => {
  const validSeverities = ['low', 'medium', 'high', 'critical'];
  
  if (!validSeverities.includes(severity.toLowerCase())) {
    throw new AppError('Invalid severity level', 400);
  }
  
  return alerts.filter(alert => 
    alert.severity.toLowerCase() === severity.toLowerCase()
  );
};

export const getAlertsByAsset = (symbol) => {
  return alerts.filter(alert => 
    alert.assetSymbol === symbol.toUpperCase()
  );
};

export const getAlertStats = () => {
  const severityCounts = {};
  const typeCounts = {};
  
  alerts.forEach(alert => {
    severityCounts[alert.severity] = (severityCounts[alert.severity] || 0) + 1;
    typeCounts[alert.type] = (typeCounts[alert.type] || 0) + 1;
  });
  
  const activeAlerts = alerts.filter(alert => alert.isActive).length;
  const criticalAlerts = alerts.filter(alert => 
    alert.severity === 'critical' && alert.isActive
  ).length;
  
  return {
    totalAlerts: alerts.length,
    activeAlerts,
    criticalAlerts,
    severityCounts,
    typeCounts,
    avgAccuracy: parseFloat(
      (alerts.reduce((sum, alert) => sum + alert.aiCoreAccuracy, 0) / alerts.length).toFixed(2)
    )
  };
};
