import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, TextField } from "@mui/material";

// Utility functions to add days and format dates
const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// Function to get the most recent past Sunday (for initialization)
const getLastSunday = (date: Date): Date => {
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const diff = dayOfWeek === 0 ? 0 : dayOfWeek;
  const lastSunday = new Date(date);
  lastSunday.setDate(date.getDate() - diff);
  return lastSunday;
};

function Inventory() {
  // Initialize the state with a valid Sunday date string.
  const [selectedSunday, setSelectedSunday] = React.useState(
    formatDate(getLastSunday(new Date()))
  );

  // Compute the next Sunday from the chosen Sunday
  const currentSunday = new Date(selectedSunday);
  const nextSunday = addDays(currentSunday, 7);
  const nextSundayStr = formatDate(nextSunday);

  // Define the grid columns.
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "weekStartDate",
      headerName: "Week Start",
      width: 120,
    },
    {
      field: "weekEndDate",
      headerName: "Week End",
      width: 120,
    },
    { field: "name", headerName: "Item Name", width: 400, editable: true },
    {
      field: "weekStart",
      headerName: "Inventory Start",
      width: 100,
      editable: true,
    },
    {
      field: "InvAdd",
      headerName: "Inventory Added",
      width: 120,
      editable: true,
    },
    {
      field: "weekEnd",
      headerName: "Inventory End",
      width: 100,
      editable: true,
    },
    {
      field: "usage",
      headerName: "Usage",
      description: "Calculated Usage",
      sortable: false,
      width: 100,
      valueGetter: (params) =>
        params?.row
          ? `${
              Number(params.row.weekStart) +
              Number(params.row.InvAdd) -
              Number(params.row.weekEnd)
            }`
          : "",
    },
    {
      field: "orderByBox",
      headerName: "Order By Box",
      width: 120,
      editable: true,
    },
    {
      field: "amountByDelivery",
      headerName: "Amount By Delivery",
      width: 140,
      editable: true,
    },
  ];

  // Sample rows: include the weekStartDate and weekEndDate based on the chosen Sunday
  const rows = [
    {
      id: 1,
      name: "Boba-Brown (6/box)",
      weekStart: 40.0,
      InvAdd: 42.0,
      weekEnd: 40.0,
    },
    {
      id: 2,
      name: "Boba-White (6/box)",
      weekStart: 18.0,
      InvAdd: 18.0,
      weekEnd: 9.0,
    },
    {
      id: 3,
      name: "Cream Pudding Powder (20/box)",
      weekStart: 20.0,
      InvAdd: 0,
      weekEnd: 17.0,
    },
    {
      id: 4,
      name: "Mochi Powder (20/box)",
      weekStart: 0,
      InvAdd: 0,
      weekEnd: 0,
    },
    {
      id: 5,
      name: "Cheese Foam Powder (20/box)",
      weekStart: 12.0,
      InvAdd: 0,
      weekEnd: 9.0,
    },
    {
      id: 6,
      name: "Pudding Powder (20/box)",
      weekStart: 28.0,
      InvAdd: 0,
      weekEnd: 21.0,
    },
    {
      id: 7,
      name: "Casava/Starch Powder (20/box)",
      weekStart: 40.0,
      InvAdd: 0,
      weekEnd: 40.0,
    },
    {
      id: 8,
      name: "Plain Jelly Powder (10/box)",
      weekStart: 2.0,
      InvAdd: 20.0,
      weekEnd: 40.0,
    },
    {
      id: 9,
      name: "Non Dairy Creamer (20/box)",
      weekStart: 75.0,
      InvAdd: 40.0,
      weekEnd: 56.0,
    },
    {
      id: 10,
      name: "Instant Q Jelly Powder (10/box)",
      weekStart: 0,
      InvAdd: 0,
      weekEnd: 10.0,
    },
  ].map((item) => ({
    ...item,
    weekStartDate: selectedSunday,
    weekEndDate: nextSundayStr,
  }));

  return (
    <Container>
      {/* Date picker to select the week start (Sunday) */}
      <TextField
        label="Select Week Start (Sunday)"
        type="date"
        value={selectedSunday}
        onChange={(e) => setSelectedSunday(e.target.value)}
        helperText="Please choose a Sunday for the week start"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Box sx={{ height: 600, width: "100%", marginTop: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeader": {
              fontSize: "10px",
              fontWeight: "bold",
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Inventory;
