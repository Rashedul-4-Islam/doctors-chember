import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'

const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div style={{textAlign:'start',marginLeft:20}}>
            <h4>Tesimonial</h4>
            <h2>What's Our Patient Says</h2>
            </div>
        <Grid container spacing={4}>
          <Grid style={{textAlign:'start'}} item xs={4}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ullam modi saepe reiciendis suscipit. Eveniet, maxime labore. Earum iusto, minima aliquam omnis nam reiciendis. Laborum illo animi unde ex mollitia?</p>
              <div style={{display:'flex'}}>
                  <img src={people1} alt="" />
                  <div style={{marginLeft:20}}>
                      <h3>Wilson Henry</h3>
                      <p>California</p>
                  </div>
              </div>
          </Grid>
          <Grid style={{textAlign:'start'}} item xs={4}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ullam modi saepe reiciendis suscipit. Eveniet, maxime labore. Earum iusto, minima aliquam omnis nam reiciendis. Laborum illo animi unde ex mollitia?</p>
              <div style={{display:'flex'}}>
                  <img src={people2} alt="" />
                  <div style={{marginLeft:20}}>
                      <h3>Wilson Henry</h3>
                      <p>California</p>
                  </div>
              </div>
          </Grid>
          <Grid style={{textAlign:'start'}} item xs={4}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ullam modi saepe reiciendis suscipit. Eveniet, maxime labore. Earum iusto, minima aliquam omnis nam reiciendis. Laborum illo animi unde ex mollitia?</p>
              <div style={{display:'flex'}}>
                  <img src={people3} alt="" />
                  <div style={{marginLeft:20}}>
                      <h3>Wilson Henry</h3>
                      <p>California</p>
                  </div>
              </div>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Testimonial;