import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";

//To create a table entry/cell, make it easier, something to also put on top
function createDataEntry(
  BeginningOfWeek: number, // Beginning of Week, auto-update logic needs to be implemented separately
  InventoryAdded: number,
  EndOfWeek: number,
  OrderByBox: number // Order in units, needs additional logic if required
) {
  let Usage = BeginningOfWeek + InventoryAdded - EndOfWeek;
  return { BeginningOfWeek, InventoryAdded, EndOfWeek, Usage, OrderByBox };
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "weekStart",
    headerName: "Week Start",
    width: 150,
    editable: true,
  },
  {
    field: "InvAdd",
    headerName: "Inventory Added",
    width: 150,
    editable: true,
  },
  {
    field: "weekEnd",
    headerName: "Week End",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "usage",
    headerName: "Usage",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.weekStart + row.InvAdd - row.weekEnd}`,
  },
];

const rows = [
  { id: 1, weekStart: 41, InvAdd: 3, weekEnd: 2 },
  { id: 2, weekStart: 12, InvAdd: 3, weekEnd: 31 },
  { id: 3, weekStart: 31, InvAdd: 3, weekEnd: 32 },
  { id: 4, weekStart: 41, InvAdd: 3, weekEnd: 42 },
  { id: 5, weekStart: 61, InvAdd: 3, weekEnd: 91 },
  { id: 6, weekStart: 23, InvAdd: 3, weekEnd: 24 },
  { id: 7, weekStart: 3, InvAdd: 3, weekEnd: 31 },
  { id: 8, weekStart: 5, InvAdd: 3, weekEnd: 42 },
  { id: 9, weekStart: 61, InvAdd: 3, weekEnd: 4 },
];

function Inventory() {
  return (
    <Container>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}

export default Inventory;
