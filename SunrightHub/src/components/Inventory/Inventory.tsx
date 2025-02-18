import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";

//To create a table entry/cell, make it easier, something to also put on top

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "name", width: 400, editable: true },
  {
    field: "weekStart",
    headerName: "Week Start",
    width: 100,
    editable: true,
  },
  {
    field: "InvAdd",
    headerName: "Inventory Added",
    width: 100,
    editable: true,
  },
  {
    field: "weekEnd",
    headerName: "Week End",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "usage",
    headerName: "Usage",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    valueGetter: (value, row) =>
      `${Number(row.weekStart) + Number(row.InvAdd) - Number(row.weekEnd)}`,
  },
  {
    field: "orderByBox",
    headerName: "Order By Box",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "amountByDelivery",
    headerName: "Amount By Delivery",
    type: "number",
    width: 100,
    editable: true,
  },
];

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
  {
    id: 11,
    name: "Black Sesame (8/box)",
    weekStart: 0,
    InvAdd: 0,
    weekEnd: 24.0,
  },
  {
    id: 12,
    name: "Grapefruit Syrup (4/box)",
    weekStart: 2.0,
    InvAdd: 4.0,
    weekEnd: 1.0,
  },
  {
    id: 13,
    name: "Passionfruit Syrup (4/box)",
    weekStart: 7.0,
    InvAdd: 4.0,
    weekEnd: 7.0,
  },
  {
    id: 14,
    name: "Mango Syrup (4/box)",
    weekStart: 8.0,
    InvAdd: 8.0,
    weekEnd: 8.0,
  },
  {
    id: 15,
    name: "Black Sugar (box)",
    weekStart: 5.0,
    InvAdd: 5.0,
    weekEnd: 5.0,
  },
  {
    id: 16,
    name: "Wintermelon Bricks (20/box)",
    weekStart: 41.0,
    InvAdd: 0,
    weekEnd: 30.0,
  },
  {
    id: 17,
    name: "White Peach Oolong Tea (30/box)",
    weekStart: 34.0,
    InvAdd: 0,
    weekEnd: 28.0,
  },
  {
    id: 18,
    name: "Ceylon Black Tea (96/box)",
    weekStart: 1.083,
    InvAdd: 1.0,
    weekEnd: 1.5,
  },
  {
    id: 19,
    name: "Jasmine Tea (108/box)",
    weekStart: 0.7,
    InvAdd: 1.0,
    weekEnd: 0.5,
  },
  {
    id: 20,
    name: "Roasted Oolong Tea (108/box)",
    weekStart: 1.0,
    InvAdd: 0,
    weekEnd: 0.75,
  },
  {
    id: 21,
    name: "Four Seasons Tea (142/box)",
    weekStart: 2.2,
    InvAdd: 1.0,
    weekEnd: 2.5,
  },
  {
    id: 22,
    name: "Thai Tea (30/box)",
    weekStart: 43.0,
    InvAdd: 0,
    weekEnd: 36.0,
  },
  {
    id: 23,
    name: "Honey Syrup (6/box)",
    weekStart: 15.0,
    InvAdd: 6.0,
    weekEnd: 14.0,
  },
  {
    id: 24,
    name: "Grass Jelly Can (6/box) Herb juice",
    weekStart: 5.0,
    InvAdd: 0,
    weekEnd: 3.0,
  },
  { id: 25, name: "Red Bean (18/box)", weekStart: 0, InvAdd: 0, weekEnd: 0 },
  {
    id: 26,
    name: "Condensed Milk (Large) 3/box",
    weekStart: 36.0,
    InvAdd: 15.0,
    weekEnd: 37.0,
  },
  {
    id: 27,
    name: "Condensed Milk (Small) 24/box",
    weekStart: 26.0,
    InvAdd: 24.0,
    weekEnd: 24.0,
  },
  {
    id: 28,
    name: "Liquid Cane Sugar (4/box)",
    weekStart: 22.0,
    InvAdd: 44.0,
    weekEnd: 46.0,
  },
  {
    id: 29,
    name: "Agar Boba (6/box)",
    weekStart: 30.0,
    InvAdd: 0,
    weekEnd: 19.0,
  },
  {
    id: 30,
    name: "Lychee Jelly (4/box)",
    weekStart: 26.0,
    InvAdd: 0,
    weekEnd: 13.0,
  },
];

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
            fontSize: "10px", // Adjust font size
            fontWeight: "bold", // Optional: Make headers bold
          },
        }}
      />
    </Box>
  );
}

export default Inventory;
