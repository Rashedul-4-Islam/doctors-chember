import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png' ;
import bg from '../../../images/bg.png' ;
import { Button, Typography } from '@mui/material';

const bannerBg = {
        background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    height : 400,
    // border : '1px solid red'
}

const Banner = () => {
    return (
        <Box style={{bannerBg}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} >
              <Typography variant="h3"  sx={{fontSize:30, color:'grey', marginTop:10,fontWeight:700}}>
                     Your New Smile <br /> Starts Here
              </Typography>
              <Typography variant="h6" sx={{fontSize:14, color:'grey', marginTop:5}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              </Typography>
              <Button variant="contained" >Get Appointment</Button>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
              <img style={{width:"400px"}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
    );
};

export default Banner;