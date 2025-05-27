import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import "./Report.css";
import { yellow } from "@mui/material/colors";

function Report() {
  return (
    <div>
      <span>
        <h3 className="top">Store Operations:</h3>
        <div className="top items">
          <FormControlLabel
            control={<Checkbox defaultChecked className="customCheckbox" />}
            label="Tea Quality"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked className="customCheckbox" />}
            label="Boba Quality"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[600],
                  },
                }}
                className="customCheckBox"
              />
            }
            label="Weekly Announcements spoke with Team"
          />
        </div>
      </span>
    </div>
  );
}

export default Report;
