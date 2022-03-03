import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function ColEightTable(props) {

  const rows = props.tableBodyData;

  return (
    <TableContainer>
      <Table aria-label="simple table" >
        <TableHead sx={props.styleTableThead} >
          <TableRow>
            <TableCell sx={props.styleTableTh} >{props.h1}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h2}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h3}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h4}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h5}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h6}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h7}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h8}</TableCell>
            <TableCell align="center" sx={props.styleTableTh} >{props.h9}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'e0e0e0', borderBottom:'1px solid #dbdde1' }}
            >
              <TableCell component="th" scope="row">
                {row.c1}
              </TableCell>
              <TableCell align="right">{row.c2}</TableCell>
              <TableCell align="right">{row.c3}</TableCell>
              <TableCell align="right">{row.c4}</TableCell>
              <TableCell align="right">{row.c5}</TableCell>
              <TableCell align="right">{row.c6}</TableCell>
              <TableCell align="right">{row.c7}</TableCell>
              <TableCell align="right">{row.c8}</TableCell>
              <TableCell align="right">{row.c9}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
