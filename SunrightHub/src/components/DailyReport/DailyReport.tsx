import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function DailyReport() {
  // State for each field, initializing from localStorage if available
  const [flexibleText, setFlexibleText] = useState(() => {
    return localStorage.getItem("flexibleText") || "";
  });
  const [meowText, setMeowText] = useState(() => {
    return localStorage.getItem("meowText") || "";
  });
  const [multilineText, setMultilineText] = useState(() => {
    return localStorage.getItem("multilineText") || "Default Value";
  });

  const handleSave = () => {
    const dataToSave = {
      flexibleText,
      meowText,
      multilineText,
    };
    localStorage.setItem("dailyReportData", JSON.stringify(dataToSave));
    alert("Report Saved!");
  };
  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("flexibleText", flexibleText);
  }, [flexibleText]);

  useEffect(() => {
    localStorage.setItem("meowText", meowText);
  }, [meowText]);

  useEffect(() => {
    localStorage.setItem("multilineText", multilineText);
  }, [multilineText]);

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="meow"
          placeholder="Placeholder"
          value={flexibleText}
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <Button variant="contained" onClick={handleSave} sx={{ m: 1 }}>
        Save
      </Button>
    </Box>
  );
}
export default DailyReport;
