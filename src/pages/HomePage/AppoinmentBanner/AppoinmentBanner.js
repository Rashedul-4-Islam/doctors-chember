import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import back from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button } from '@mui/material';


const appoimentbg = {
    background : `url(${back})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop : 150
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoimentbg} sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
              <img style={{width:400,marginTop:-120}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h5" component="div" style={{color:'white',fontSize:24,fontWeight:600}}>
                  Appointment   
          </Typography>
          <Typography variant="h4" component="div" style={{color:'white',fontSize:14,fontWeight:500,marginBottom:20,marginTop:10}}>
                 Make an Appointment Today   
          </Typography>
          <Button variant="contained">Learn More</Button> 

          </Grid>
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;