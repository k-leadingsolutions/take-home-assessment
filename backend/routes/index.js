import express from 'express';
import assetRoutes from './assetRoutes.js';
import newsRoutes from './newsRoutes.js';
import alertRoutes from './alertRoutes.js';
import * as dashboardController from '../controllers/dashboardController.js';
import * as portfolioController from '../controllers/portfolioController.js';
import * as eventController from '../controllers/eventController.js';
import * as insightController from '../controllers/insightController.js';
import { validatePagination, validateSort } from '../middleware/validator.js';

const router = express.Router();

router.use('/assets', assetRoutes);
router.use('/news', newsRoutes);
router.use('/alerts', alertRoutes);

router.get('/dashboard', dashboardController.getDashboard);

router.get('/portfolio', portfolioController.getPortfolio);
router.get('/portfolio/performance', portfolioController.getPortfolioPerformance);

router.get('/events', validatePagination, validateSort, eventController.getEvents);
router.get('/events/upcoming', validatePagination, eventController.getUpcomingEvents);

router.get('/insights', validatePagination, validateSort, insightController.getInsights);
router.get('/influencers', validatePagination, validateSort, insightController.getInfluencers);

router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

router.get('/api', (req, res) => {
  res.redirect('/dashboard');
});

router.get('/api/stocks', (req, res) => {
  res.redirect('/assets/stocks');
});

router.get('/api/crypto', (req, res) => {
  res.redirect('/assets/crypto');
});

router.get('/api/news', (req, res) => {
  res.redirect('/news');
});

router.get('/api/alerts', (req, res) => {
  res.redirect('/alerts');
});

export default router;
