import { Router } from 'express';
import DailyReportController from '../controllers/dailyReportController';

const router = Router();
const dailyReportController = new DailyReportController();

// Route to create a new daily report
router.post('/', dailyReportController.createReport);

// Route to get a daily report by date
router.get('/:date', dailyReportController.getReport);

// Route to update a daily report by date
router.put('/:date', dailyReportController.updateReport);

export default router;