import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBookin,handleBookingClose,booking,date,setBookingSuccess}) => {
         const {name,time} = booking;
         const {user} = useAuth();
         const initialInfo = {patientName : user.displayName, email: user.email,phone: ''}
        const [bookingInfo,setBookingInfo] = useState(initialInfo);

        const handleOnBlur = e => {
              const field = e.target.name;
              const value = e.target.value;
              const newInfo = {...bookingInfo}
              newInfo[field] = value;
              setBookingInfo(newInfo);
        }
         const handleBookingSubmit = e =>{

            const appointment = {
              ...bookingInfo,
              time,
              serviceName: name,
              date: date.toLocaleDateString()
            }
          fetch('https://stark-caverns-04377.herokuapp.com/appointments',{
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(appointment)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId) {
                setBookingSuccess(true);
                handleBookingClose();
              }
          });
          //  console.log(appointment);
            //  alert('submitting');
             handleBookingClose();
             e.preventDefault();
         }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBookin}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBookin}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleBookingSubmit}>
                 <TextField
                    id="filled-size-small"
                    disabled
                    sx={{width:'90%',m:1}}
                    defaultValue={time}
                    variant="filled"
                    size="small"
                  />
                 <TextField
                    id="filled-size-small"
                    sx={{width:'90%',m:1}}
                    // placeholder="Your Name"
                    name="patientName"
                    onBlur= {handleOnBlur}
                    defaultValue={user.displayName}
                    variant="filled"
                    size="small"
                  />
                 <TextField
                    id="filled-size-small"
                    sx={{width:'90%',m:1}}
                    // placeholder="Your Email"
                    name="email"
                    onBlur= {handleOnBlur}
                    defaultValue={user.email}
                    variant="filled"
                    size="small"
                  />
                 <TextField
                    id="filled-size-small"
                    sx={{width:'90%',m:1}}
                    // placeholder="phone Number"
                    name="phone"
                    onBlur= {handleOnBlur}
                    defaultValue="Phone Number"
                    variant="filled"
                    size="small"
                  />
                 <TextField
                    id="filled-size-small"
                    disabled
                    sx={{width:'90%',m:1}}
                    defaultValue={date.toDateString()}
                    variant="filled"
                    size="small"
                  />
                  <Button type="submit" variant="contained">Book</Button>
                 </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;