import { allAssets } from '../mockData.js';
import * as newsService from '../services/newsService.js';
import * as alertService from '../services/alertService.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getDashboard = asyncHandler(async (req, res) => {
  const sortedByChange = [...allAssets].sort((a, b) => b.changePercent - a.changePercent);
  
  const topGainers = sortedByChange.slice(0, 5).map(asset => ({
    symbol: asset.symbol,
    name: asset.name,
    type: asset.type,
    currentPrice: asset.currentPrice,
    change: asset.change,
    changePercent: asset.changePercent,
    sentiment: asset.sentiment
  }));
  
  const topLosers = sortedByChange.slice(-5).reverse().map(asset => ({
    symbol: asset.symbol,
    name: asset.name,
    type: asset.type,
    currentPrice: asset.currentPrice,
    change: asset.change,
    changePercent: asset.changePercent,
    sentiment: asset.sentiment
  }));
  
  const allNews = newsService.getAllNews();
  const recentNews = allNews
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 10);
  
  const activeAlerts = alertService.getAllAlerts()
    .filter(alert => alert.isActive)
    .sort((a, b) => {
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    })
    .slice(0, 10);
  
  const stats = {
    totalAssets: allAssets.length,
    totalAlerts: activeAlerts.length,
    criticalAlerts: activeAlerts.filter(a => a.severity === 'critical').length,
    recentNewsCount: allNews.filter(n => {
      const newsDate = new Date(n.timestamp);
      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      return newsDate > dayAgo;
    }).length
  };
  
  res.json({
    success: true,
    data: {
      topGainers,
      topLosers,
      recentNews,
      activeAlerts,
      stats
    }
  });
});
