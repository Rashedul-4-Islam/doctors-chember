import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Booking from '../Booking/Booking';

const services =  [
    {
        id:1,
        name:'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space:5
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time: '08.00 AM - 10.00 AM',
        space:8
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time: '11.00 AM - 11.00 AM',
        space:9
    },
    {
        id:4,
        name:'cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space:5
    },
    {
        id:5,
        name:'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space:10
    },
    {
        id:6,
        name:'Oral Surgery',
        time: '07.00 AM - 08.00 PM',
        space:10
    }
]

const AvailableAppoinment = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);
    return (
        <Container>
            <h2>Available Appointments on {date.toDateString()}</h2>
            {bookingSuccess && <Alert severity="success">Successfully Booking</Alert>}
            <Grid container spacing={2}>
                  {
                      services.map(service => <Booking 
                         key ={service.id}
                        service={service}
                        date ={date}
                        setBookingSuccess = {setBookingSuccess}
                        ></Booking>)
                  }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;