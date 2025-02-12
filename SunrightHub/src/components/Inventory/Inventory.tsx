
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


function Inventory() {


    return(
        <h1>Inventory!!</h1>
    ) 

}


export default Inventory
