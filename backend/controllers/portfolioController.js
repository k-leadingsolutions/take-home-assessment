import { portfolio } from '../mockData.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

export const getPortfolio = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    data: portfolio
  });
});

export const getPortfolioPerformance = asyncHandler(async (req, res) => {
  const { period = 'all' } = req.query;
  
  const validPeriods = ['day', 'week', 'month', 'year', 'allTime'];
  
  if (!validPeriods.includes(period)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid period. Must be one of: day, week, month, year, allTime'
    });
  }
  
  const performance = portfolio.performance[period === 'all' ? 'allTime' : period];
  
  res.json({
    success: true,
    data: {
      period: period === 'all' ? 'allTime' : period,
      totalValue: portfolio.totalValue,
      invested: portfolio.invested,
      cash: portfolio.cash,
      performance
    }
  });
});
