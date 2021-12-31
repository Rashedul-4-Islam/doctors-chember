import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DentalCare = () => {
    return (
        <div style={{marginTop:'20px',padding:'10px'}}>
            <Grid container spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={6}>
                     <img style={{width:'50%'}} src={treatment} alt="" />
                </Grid>
                <Grid style={{textAlign:'start'}} item xs={6}>
                <Typography variant="h3" style={{fontWeight:700}} gutterBottom component="div">
                    Exceptional Dental Care,on our terms
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corporis illum excepturi debitis nostrum non quidem earum quam alias dolorum. Officia quas rem unde! Fugiat velit dolore rem quas quos.</p>
                <Button variant="contained">Contained</Button>
                </Grid>
           </Grid>
        </div>
    );
};

export default DentalCare;