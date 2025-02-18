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
import dayjs from "dayjs";
import "./DailyReport.css";

// Define the default values for one report
const initialReportValues = {
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

// Define initial state with separate objects for day and night reports
const initialFormValues = {
  day: { ...initialReportValues },
  night: { ...initialReportValues },
};

function DailyReport() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  // Store reports keyed by date (each date holds both day and night reports)
  const [reports, setReports] = useState({});

  // Helper to auto-save to 'reports' whenever the user types or checks a box
  const autoSave = (newFormValues) => {
    // Only save if a date is selected
    if (!selectedDate) return;

    const dateKey = selectedDate.format("YYYY-MM-DD");
    setReports((prevReports) => ({
      ...prevReports,
      [dateKey]: newFormValues,
    }));
    console.log("Auto-saved for", dateKey, newFormValues);
  };

  // Handle date change: load saved reports (if any) or reset the forms
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (newValue) {
      const dateKey = newValue.format("YYYY-MM-DD");
      if (reports[dateKey]) {
        setFormValues(reports[dateKey]);
      } else {
        setFormValues(initialFormValues);
      }
    } else {
      setFormValues(initialFormValues);
    }
  };

  // Update the appropriate shift’s checkbox value & auto-save
  const handleCheckboxChange = (shift, event) => {
    const { name, checked } = event.target;
    setFormValues((prev) => {
      const updated = {
        ...prev,
        [shift]: {
          ...prev[shift],
          [name]: checked,
        },
      };
      autoSave(updated);
      return updated;
    });
  };

  // Update the appropriate shift’s text field value & auto-save
  const handleTextChange = (shift, event) => {
    const { name, value } = event.target;
    setFormValues((prev) => {
      const updated = {
        ...prev,
        [shift]: {
          ...prev[shift],
          [name]: value,
        },
      };
      autoSave(updated);
      return updated;
    });
  };

  return (
    <div>
      {/* Date Picker (shared by both reports) */}
      <Paper className="daily-report">
        <Typography variant="h4" align="center" gutterBottom>
          Daily Reports
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            views={["year", "month", "day"]}
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Paper>

      {/* Day Report */}
      <Paper className="daily-report">
        <Typography variant="h4" align="center" gutterBottom>
          Day Report
        </Typography>

        {/* Store Operations Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Store Operations
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.day.teaQuality}
                    onChange={(e) => handleCheckboxChange("day", e)}
                    name="teaQuality"
                  />
                }
                label="Tea Quality Check"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.day.bobaQuality}
                    onChange={(e) => handleCheckboxChange("day", e)}
                    name="bobaQuality"
                  />
                }
                label="Boba Quality Check"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.day.weeklyLeadership}
                    onChange={(e) => handleCheckboxChange("day", e)}
                    name="weeklyLeadership"
                  />
                }
                label="Weekly Leadership notes communicated with team"
              />
            </Grid>
          </Grid>
        </div>

        {/* General Notes Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            General Notes
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="shiftLeadsSoups"
                label="Shift Leads/Soups"
                multiline
                fullWidth
                value={formValues.day.shiftLeadsSoups}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="generalNotes"
                label="General Notes"
                multiline
                rows={4}
                fullWidth
                value={formValues.day.generalNotes}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Employee Performance Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Employee Performance
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="anyoneLate"
                label="Anyone Late? ___Minutes"
                multiline
                fullWidth
                value={formValues.day.anyoneLate}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="employeePerformance"
                label="Employee Performance"
                multiline
                rows={4}
                fullWidth
                value={formValues.day.employeePerformance}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Previous Shift Lead/Soup Comments Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Previous Shift Lead/Soup Comments
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                name="previousSupervisor"
                label="Refills Done? Previous Supervisor?"
                multiline
                fullWidth
                value={formValues.day.previousSupervisor}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="previousShiftNotes"
                label="Previous Shift Notes"
                multiline
                rows={4}
                fullWidth
                value={formValues.day.previousShiftNotes}
                onChange={(e) => handleTextChange("day", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Customer Comments Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Customer Comments
          </Typography>
          <TextField
            name="customerComments"
            label="Comments and if was solved?"
            multiline
            fullWidth
            value={formValues.day.customerComments}
            onChange={(e) => handleTextChange("day", e)}
          />
        </div>
      </Paper>

      {/* Night Report */}
      <Paper className="daily-report">
        <Typography variant="h4" align="center" gutterBottom>
          Night Report
        </Typography>

        {/* Store Operations Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Store Operations
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.night.teaQuality}
                    onChange={(e) => handleCheckboxChange("night", e)}
                    name="teaQuality"
                  />
                }
                label="Tea Quality Check"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.night.bobaQuality}
                    onChange={(e) => handleCheckboxChange("night", e)}
                    name="bobaQuality"
                  />
                }
                label="Boba Quality Check"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.night.weeklyLeadership}
                    onChange={(e) => handleCheckboxChange("night", e)}
                    name="weeklyLeadership"
                  />
                }
                label="Weekly Leadership notes communicated with team"
              />
            </Grid>
          </Grid>
        </div>

        {/* General Notes Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            General Notes
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="shiftLeadsSoups"
                label="Shift Leads/Soups"
                multiline
                fullWidth
                value={formValues.night.shiftLeadsSoups}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="generalNotes"
                label="General Notes"
                multiline
                rows={4}
                fullWidth
                value={formValues.night.generalNotes}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Employee Performance Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Employee Performance
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="anyoneLate"
                label="Anyone Late? ___Minutes"
                multiline
                fullWidth
                value={formValues.night.anyoneLate}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="employeePerformance"
                label="Employee Performance"
                multiline
                rows={4}
                fullWidth
                value={formValues.night.employeePerformance}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Previous Shift Lead/Soup Comments Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Previous Shift Lead/Soup Comments
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                name="previousSupervisor"
                label="Refills Done? Previous Supervisor?"
                multiline
                fullWidth
                value={formValues.night.previousSupervisor}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="previousShiftNotes"
                label="Previous Shift Notes"
                multiline
                rows={4}
                fullWidth
                value={formValues.night.previousShiftNotes}
                onChange={(e) => handleTextChange("night", e)}
              />
            </Grid>
          </Grid>
        </div>

        {/* Customer Comments Section */}
        <div className="section">
          <Typography variant="h6" gutterBottom className="section-heading">
            Customer Comments
          </Typography>
          <TextField
            name="customerComments"
            label="Comments and if was solved?"
            multiline
            fullWidth
            value={formValues.night.customerComments}
            onChange={(e) => handleTextChange("night", e)}
          />
        </div>
      </Paper>
    </div>
  );
}

export default DailyReport;
