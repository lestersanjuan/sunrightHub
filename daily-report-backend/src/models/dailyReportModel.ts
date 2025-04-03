import mongoose, { Schema, Document } from 'mongoose';

interface IDailyReport extends Document {
  teaQuality: boolean;
  bobaQuality: boolean;
  weeklyLeadership: boolean;
  shiftLeadsSoups: string;
  generalNotes: string;
  anyoneLate: string;
  employeePerformance: string;
  previousSupervisor: string;
  previousShiftNotes: string;
  customerComments: string;
  date: Date;
}

const DailyReportSchema: Schema = new Schema({
  teaQuality: { type: Boolean, required: true },
  bobaQuality: { type: Boolean, required: true },
  weeklyLeadership: { type: Boolean, required: true },
  shiftLeadsSoups: { type: String, required: true },
  generalNotes: { type: String, required: true },
  anyoneLate: { type: String, required: true },
  employeePerformance: { type: String, required: true },
  previousSupervisor: { type: String, required: true },
  previousShiftNotes: { type: String, required: true },
  customerComments: { type: String, required: true },
  date: { type: Date, required: true, unique: true }
});

const DailyReport = mongoose.model<IDailyReport>('DailyReport', DailyReportSchema);

export default DailyReport;