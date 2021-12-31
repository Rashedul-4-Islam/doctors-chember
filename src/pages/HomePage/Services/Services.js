import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import floride from '../../../images/fluoride.png';
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from '../Service/Service';

const services = [
    {
        "name" : "floride Treatment",
        "description" : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Man",
        "img": floride
    },
    {
        "name" : "Cavity Palling",
        "description" : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Man",
        "img": cavity
    },
    {
        "name" : "Teeth Whitening",
        "description" : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Man",
        "img": whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
          <Typography sx={{ fontWeight: 500, m:2, color: 'success.main'}} variant="h6" component="div">
                  Our Services
            </Typography>
          <Typography sx={{ fontWeight: 600, m:2}} variant="h4" component="div">
                 Services We Provide
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
             services.map(service => <Service
                key = {service.name}
                service = {service}
             ></Service>)
          }
        </Grid>
          </Container>
      </Box>
    );
};

export default Services;