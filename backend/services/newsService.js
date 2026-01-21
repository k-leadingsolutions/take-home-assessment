import { newsArticles } from '../mockData.js';
import { AppError } from '../middleware/errorHandler.js';

export const getAllNews = () => {
  return newsArticles;
};

export const getNewsByAsset = (symbol) => {
  const filtered = newsArticles.filter(news => 
    news.affectedAssets.includes(symbol.toUpperCase())
  );
  
  return filtered;
};

export const getNewsByCategory = (category) => {
  const filtered = newsArticles.filter(news => 
    news.category.toLowerCase() === category.toLowerCase()
  );
  
  return filtered;
};

export const getNewsStats = () => {
  const categories = {};
  const sentiments = {};
  
  newsArticles.forEach(news => {
    categories[news.category] = (categories[news.category] || 0) + 1;
    sentiments[news.sentiment] = (sentiments[news.sentiment] || 0) + 1;
  });
  
  const avgImpact = newsArticles.reduce((sum, news) => {
    const impactScore = news.impact === 'high' ? 3 : news.impact === 'medium' ? 2 : 1;
    return sum + impactScore;
  }, 0) / newsArticles.length;
  
  return {
    totalArticles: newsArticles.length,
    categories,
    sentiments,
    avgImpact: parseFloat(avgImpact.toFixed(2)),
    recentCount: newsArticles.filter(n => {
      const newsDate = new Date(n.timestamp);
      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      return newsDate > dayAgo;
    }).length
  };
};
