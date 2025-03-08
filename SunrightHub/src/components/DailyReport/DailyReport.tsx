import React, { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "./DailyReport.css";

// Define the structure of a report
interface ReportValues {
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
}

// Define the initial values for a single shift (Day/Night)
const initialReportValues: ReportValues = {
  teaQuality: false,
  bobaQuality: false,
  weeklyLeadership: false,
  shiftLeadsSoups: "",
  generalNotes: "",
  anyoneLate: "",
  employeePerformance: "",
  previousSupervisor: "",
  previousShiftNotes: "",
  customerComments: "",
};

// Define the form state structure
interface FormValues {
  day: ReportValues;
  night: ReportValues;
}

// Initialize the form state
const initialFormValues: FormValues = {
  day: { ...initialReportValues },
  night: { ...initialReportValues },
};

const DailyReport: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [reports, setReports] = useState<{ [key: string]: FormValues }>({});

  // Auto-save function when the user makes changes
  const autoSave = (newFormValues: FormValues) => {
    if (!selectedDate) return;
    const dateKey = selectedDate.format("YYYY-MM-DD");
    setReports((prevReports) => ({
      ...prevReports,
      [dateKey]: newFormValues,
    }));
    console.log("Auto-saved for", dateKey, newFormValues);
  };

  // Handle date selection
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      const dateKey = newValue.format("YYYY-MM-DD");
      setFormValues(reports[dateKey] || initialFormValues);
    } else {
      setFormValues(initialFormValues);
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (
    shift: "day" | "night",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setFormValues((prev) => {
      const updated = {
        ...prev,
        [shift]: { ...prev[shift], [name]: checked },
      };
      autoSave(updated);
      return updated;
    });
  };

  // Handle text field changes
  const handleTextChange = (
    shift: "day" | "night",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => {
      const updated = {
        ...prev,
        [shift]: { ...prev[shift], [name]: value },
      };
      autoSave(updated);
      return updated;
    });
  };

  return (
    <div className="daily-report-container">
      {/* Date Picker */}
      <div className="date-picker-container">
        <Typography variant="h4" align="center" gutterBottom>
          Daily Reports
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </div>

      {/* Report Containers */}
      <div className="report-container">
        {/* Day Report */}
        <Paper className="daily-report">
          <Typography variant="h5" align="center" gutterBottom>
            Day Report
          </Typography>
          {renderReportSection("day")}
        </Paper>

        {/* Night Report */}
        <Paper className="daily-report">
          <Typography variant="h5" align="center" gutterBottom>
            Night Report
          </Typography>
          {renderReportSection("night")}
        </Paper>
      </div>
    </div>
  );

  // Render function to avoid repeating code
  function renderReportSection(shift: "day" | "night") {
    return (
      <Grid container spacing={2}>
        {/* Store Operations */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-heading">
            Store Operations
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues[shift].teaQuality}
                onChange={(e) => handleCheckboxChange(shift, e)}
                name="teaQuality"
              />
            }
            label="Tea Quality Check"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues[shift].bobaQuality}
                onChange={(e) => handleCheckboxChange(shift, e)}
                name="bobaQuality"
              />
            }
            label="Boba Quality Check"
          />
        </Grid>

        {/* General Notes */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-heading">
            General Notes
          </Typography>
          <TextField
            name="generalNotes"
            label="General Notes"
            multiline
            rows={3}
            fullWidth
            value={formValues[shift].generalNotes}
            onChange={(e) => handleTextChange(shift, e)}
          />
        </Grid>

        {/* Employee Performance */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-heading">
            Employee Performance
          </Typography>
          <TextField
            name="anyoneLate"
            label="Anyone Late? ___ Minutes"
            multiline
            fullWidth
            value={formValues[shift].anyoneLate}
            onChange={(e) => handleTextChange(shift, e)}
          />
          <TextField
            name="employeePerformance"
            label="Employee Performance"
            multiline
            rows={3}
            fullWidth
            value={formValues[shift].employeePerformance}
            onChange={(e) => handleTextChange(shift, e)}
          />
        </Grid>

        {/* Previous Shift Notes */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-heading">
            Previous Shift Lead/Soup Comments
          </Typography>
          <TextField
            name="previousSupervisor"
            label="Refills Done? Previous Supervisor?"
            multiline
            fullWidth
            value={formValues[shift].previousSupervisor}
            onChange={(e) => handleTextChange(shift, e)}
          />
          <TextField
            name="previousShiftNotes"
            label="Previous Shift Notes"
            multiline
            rows={3}
            fullWidth
            value={formValues[shift].previousShiftNotes}
            onChange={(e) => handleTextChange(shift, e)}
          />
        </Grid>

        {/* Customer Comments */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-heading">
            Customer Comments
          </Typography>
          <TextField
            name="customerComments"
            label="Comments and how they were solved?"
            multiline
            fullWidth
            value={formValues[shift].customerComments}
            onChange={(e) => handleTextChange(shift, e)}
          />
        </Grid>
      </Grid>
    );
  }
};

export default DailyReport;
