import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name,description,img} = props.service;
    return (
             <Grid item xs={2} sm={4} md={4} >
                  <Card  sx={{ minWidth: 275,border:0,boxShadow: 0 }}>
                  <CardMedia
                        component="img"
                        style = {{width:'auto',height:'80px',margin:'0px auto'}}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                        </Typography>
                        <Typography variant="h5" component="div">
                         {description}
                        </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography> */}
                    </CardContent>
                   </Card>
            </Grid>
    );
};

export default Service;