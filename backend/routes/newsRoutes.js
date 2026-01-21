import express from 'express';
import * as newsController from '../controllers/newsController.js';
import { validatePagination, validateSort } from '../middleware/validator.js';

const router = express.Router();

router.get('/', validatePagination, validateSort, newsController.getNews);
router.get('/stats', newsController.getNewsStats);
router.get('/asset/:symbol', validatePagination, validateSort, newsController.getNewsByAsset);
router.get('/category/:category', validatePagination, validateSort, newsController.getNewsByCategory);

export default router;
