import React from "react";
import "./Report.css";
function Report() {
  return (
    <div>
      <span>
        <h3 className="inline">Store Operations:</h3>
        <input type="checkbox" name="storeOperations" />
        <label>Tea Quality</label>
        <input type="checkbox" name="storeOperations" />
        <label>Boba Quality</label>
        <input type="checkbox" name="storeOperations" />
        <label>Weekly Announcements spoke with Team</label>
      </span>
    </div>
  );
}

export default Report;
