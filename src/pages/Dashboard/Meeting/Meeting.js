import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Meeting = ({date}) => {
    const {user,token} = useAuth();
    const [meeting,setMeeting] = useState([]);
    console.log(meeting);
    useEffect(() =>{
          const url = `https://stark-caverns-04377.herokuapp.com/appointments?email=${user.email}&date=${date}`
          fetch(url,{
            headers: {
              'authorization' : `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => setMeeting(data));
    },[date,user.email,token])
    // console.log(user);
    return (
        <div>
            <h3>Appointments : {meeting.length}</h3>
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meeting.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Meeting;