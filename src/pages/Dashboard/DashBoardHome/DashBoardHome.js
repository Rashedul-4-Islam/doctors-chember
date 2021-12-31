import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Meeting from '../Meeting/Meeting';

const DashBoardHome = () => {
    const [date,setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
             <Calender 
             date={date} 
             setDate={setDate}
             >
             </Calender>
        </Grid>
        <Grid item xs={12} md={8}>
             <Meeting date={date}></Meeting>
        </Grid>
    </Grid>
    );
};

export default DashBoardHome;