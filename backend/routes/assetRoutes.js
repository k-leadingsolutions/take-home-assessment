import express from 'express';
import * as assetController from '../controllers/assetController.js';
import { validatePagination, validateSort } from '../middleware/validator.js';

const router = express.Router();

router.get('/', validatePagination, validateSort, assetController.getAssets);
router.get('/stats', assetController.getAssetStats);
router.get('/stocks', validatePagination, validateSort, assetController.getStocks);
router.get('/stocks/:symbol', assetController.getStockBySymbol);
router.get('/crypto', validatePagination, validateSort, assetController.getCrypto);
router.get('/crypto/:symbol', assetController.getCryptoBySymbol);
router.get('/:symbol/history', assetController.getAssetHistory);

export default router;
