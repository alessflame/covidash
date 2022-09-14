import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import style from "./CountriesTable.module.css"
import { setNumber } from '../../helper/utils/setNumber';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#457ABF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  
}));

// const printApi=async()=>{
//   console.log(getCountriesData());

// }


export default function CountriesTable({rows}) {
  return (
    <TableContainer className={style.table} component={Paper} sx={{position:"relative", width:"92%" , height:"400px", m:2}}>
      <Table className={style.table} sx={{width:"100%" }} aria-label="customized table">
       <TableHead >
          
         
         <TableRow sx={{backgroundColor:"blue"}}>
            <StyledTableCell >Stati</StyledTableCell>
            <StyledTableCell align="center">Casi</StyledTableCell>
            <StyledTableCell align="center">Decessi</StyledTableCell>

          </TableRow> 
        </TableHead>
        <TableBody>
          { rows.length > 0 ?  rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell >
                {row.name} {row.image ? <img style={{width:"20px"}} src={row.image} alt='country'/> : ""}
              </StyledTableCell>
              <StyledTableCell align="center">{setNumber(row.cases)}</StyledTableCell>
              <StyledTableCell align="center">{setNumber(row.deaths)}</StyledTableCell>

            </StyledTableRow>
          )) : <StyledTableRow /> }
        </TableBody>
      </Table>
    </TableContainer>
  );
}