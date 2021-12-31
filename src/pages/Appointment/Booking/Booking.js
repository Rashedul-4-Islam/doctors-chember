import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({service,date,setBookingSuccess}) => {
    const {name,time,space} = service;
    const [openBookin, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
              <Grid item xs={12} sm={6} md={4} >
               <Paper elevation={3} style={{padding:10}}> 
                    <h2>{name}</h2>
                    <p>Time : {time}</p>
                    <p>{space} space available</p>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
               </Paper>
              </Grid>
              <BookingModal 
              date ={date}
              booking = {service}
              openBookin={openBookin}
               handleBookingClose={handleBookingClose}
               setBookingSuccess = {setBookingSuccess}
               ></BookingModal>
        
        </>
           
    );
};

export default Booking;