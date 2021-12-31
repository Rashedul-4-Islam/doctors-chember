import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const LogIn = () => {
    const {user,logInUser,isLoading,authError,signInWithGoogle} = useAuth();
    const [logInData,setLogInData] = useState();

    const location = useLocation();
    const history = useHistory();

        const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...logInData};
            newLoginData[field] = value;
            setLogInData(newLoginData);
        }
       const handleLoginSubmit = e =>{
           logInUser(logInData.email , logInData.password,location,history);
        //    alert('submitted')
            e.preventDefault();
       }

    return (
        <Container>
             <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{marginTop:20}}>
                <Typography variant="body1" gutterBottom>Log In</Typography>
                  <form onSubmit={handleLoginSubmit}>
                  <TextField 
                   style={{width:'75%',m:1}}
                   id="standard-basic" 
                   name="email"
                   type="email"
                   onBlur={handleOnChange}
                   label="Your Email"
                   variant="standard" />
                  <TextField 
                  style={{width:'75%'}}
                   id="standard-basic" 
                   name="password"
                   onBlur={handleOnChange}
                   label="Your Password" 
                   type="password" 
                   variant="standard" />
                  <Button style={{width:'75%', marginTop:20}} type="submit" variant="contained">Log In</Button>
                   <NavLink style={{textDecoration:'none'}} to="/register"> <Button  variant="text">New User ? Please Register</Button></NavLink>
                  </form>
                  <Button style={{width:'75%', marginTop:20}} variant="contained" onClick={signInWithGoogle}>Google</Button>
                  {
                      isLoading &&  <CircularProgress />
                  }
                  {user?.email && <Alert severity="success">Successfully Login</Alert>}
                  {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                     <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;