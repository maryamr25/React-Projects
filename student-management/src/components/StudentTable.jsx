import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function StudentTable({students}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Roll No</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Student Age</TableCell>
            <TableCell align="center">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                {student.rollNo}
              </TableCell>
              <TableCell align="center">{student.name}</TableCell>
              <TableCell align="center">{student.age}</TableCell>
              <TableCell align="center">
                Edit-Icon Delete-
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
