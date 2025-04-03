import { Request, Response } from 'express';
import DailyReportService from '../services/dailyReportService';

class DailyReportController {
  private dailyReportService: DailyReportService;

  constructor() {
    this.dailyReportService = new DailyReportService();
  }

  public createReport = async (req: Request, res: Response): Promise<void> => {
    try {
      const reportData = req.body;
      const newReport = await this.dailyReportService.createReport(reportData);
      res.status(201).json(newReport);
    } catch (error) {
      res.status(500).json({ message: 'Error creating report', error });
    }
  };

  public getReport = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const report = await this.dailyReportService.getReport(id);
      if (report) {
        res.status(200).json(report);
      } else {
        res.status(404).json({ message: 'Report not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving report', error });
    }
  };

  public updateReport = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const reportData = req.body;
      const updatedReport = await this.dailyReportService.updateReport(id, reportData);
      if (updatedReport) {
        res.status(200).json(updatedReport);
      } else {
        res.status(404).json({ message: 'Report not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating report', error });
    }
  };
}

export default DailyReportController;