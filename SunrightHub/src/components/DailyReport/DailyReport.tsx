import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Checkbox, FormControlLabel } from "@mui/material";
/**                             SRDJ DAILY REPORT
DATE:                     Shift Lead:

                                Store Operations
Tea Quality [] Boba quality [] Weekly Leadership Notes []






**/
function DailyReport() {
  const valueRef = useRef("");

  const saveValue = () => {
    console.log(valueRef.current.value);
  };

  return (
    <div>
      <h1 className="StoreOperations">STORE OPERATIONS</h1>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
        noValidate
        autoComplete="off"
      ></Box>
      {/*STORE OPREATIONS*/}
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={'"year", "month" and "day"'}
            views={["year", "month", "day"]}
          />
        </LocalizationProvider>
      </div>
      <div>
        <FormControlLabel control={<Checkbox />} label="Tea Quality Check" />
        <FormControlLabel control={<Checkbox />} label="Boba Quality Check" />
        <FormControlLabel
          control={<Checkbox />}
          label="Weekly Leadership notes communicated with team"
        />
      </div>
      <h2>General Notes</h2>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Shift Leads/Soups"
          inputRef={valueRef}
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="General Notes"
          multiline
          rows={4}
        />
      </div>
      <h2>Employee Perforamance</h2>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Anyone Late? ___Minutes"
          inputRef={valueRef}
          multiline
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Emloyee Performance"
          inputRef={valueRef}
          multiline
        />
      </div>
      <h2>Previous Shift Lead/Soup Comments</h2>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Reffils Done? Previous Supervsior?"
          inputRef={valueRef}
          multiline
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Previous Shift Notes"
          inputRef={valueRef}
          multiline
        />
      </div>
      <h2>Customer Comments</h2>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Comments and if was solved?"
          inputRef={valueRef}
          multiline
        />
      </div>
      <Button variant="contained" onClick={saveValue} sx={{ m: 1 }}>
        Save
      </Button>
    </div>
  );
}

export default DailyReport;
