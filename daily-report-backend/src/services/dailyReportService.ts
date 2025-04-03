import { DailyReport } from '../models/dailyReportModel';

export class DailyReportService {
  async createReport(reportData: any) {
    const report = new DailyReport(reportData);
    return await report.save();
  }

  async getReport(date: string) {
    return await DailyReport.findOne({ date });
  }

  async updateReport(date: string, reportData: any) {
    return await DailyReport.findOneAndUpdate({ date }, reportData, { new: true });
  }

  async getAllReports() {
    return await DailyReport.find();
  }
}