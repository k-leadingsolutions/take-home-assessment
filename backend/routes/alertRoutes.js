import express from 'express';
import * as alertController from '../controllers/alertController.js';
import { validatePagination, validateSort } from '../middleware/validator.js';

const router = express.Router();

router.get('/', validatePagination, validateSort, alertController.getAlerts);
router.get('/stats', alertController.getAlertStats);
router.get('/critical', validatePagination, validateSort, alertController.getCriticalAlerts);
router.get('/severity/:severity', validatePagination, validateSort, alertController.getAlertsBySeverity);
router.get('/asset/:symbol', validatePagination, validateSort, alertController.getAlertsByAsset);

export default router;
