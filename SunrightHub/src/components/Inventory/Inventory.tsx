import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";

// Function to get the most recent past Sunday
const getLastSunday = (): string => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const daysSinceSunday = dayOfWeek === 0 ? 0 : dayOfWeek; // If today is Sunday, keep it
  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - daysSinceSunday);
  return lastSunday.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

// Define columns for the table
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "name", headerName: "Item Name", width: 400, editable: true },
  { field: "weekStart", headerName: "Week Start", width: 100, editable: true },
  {
    field: "InvAdd",
    headerName: "Inventory Added",
    width: 120,
    editable: true,
  },
  { field: "weekEnd", headerName: "Week End", width: 100, editable: true },
  {
    field: "usage",
    headerName: "Usage",
    description: "Calculated Usage",
    sortable: false,
    width: 100,
    valueGetter: (value, row) =>
      `${Number(row.weekStart) + Number(row.InvAdd) - Number(row.weekEnd)}`,
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

// Sample inventory data with the date added
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
  { id: 4, name: "Mochi Powder (20/box)", weekStart: 0, InvAdd: 0, weekEnd: 0 },
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
].map((item, index) => ({ ...item, date: getLastSunday() })); // Assign date to each row

// Inventory table component
function Inventory() {
  return (
    <Box sx={{ height: 1000, width: "100%" }}>
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
  );
}

export default Inventory;
