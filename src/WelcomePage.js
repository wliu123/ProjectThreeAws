import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/images/Typo.mock-06.png"

////////////////////////////////////// MUI

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

////////////////////////////////////// MUI


function WelcomePage({setCurrentUser}) {
    
    const [formState, setFormState] = useState({
        username: ""
      })

    const {username} = formState

    function handleChange(e) {
      const newFormState = {...formState, [e.target.id]: e.target.value}
      setFormState(newFormState)
    }

    let navigate = useNavigate();

    function handleFormSubmit(e){
        
      e.preventDefault();

        fetch(`http://localhost:9292/login/${username}`)
        .then((res) => res.json())
        .then(data => {
            if (username) {
            setCurrentUser(data)
            navigate(`/${data.id}/home`)
          }
        })
      }
    


   ////////////////
   // MUI
   const theme = createTheme();
    ///////////////

    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            maxWidth: 'xs',
            marginTop: 30,
            display: 'grid',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 20,
          }}
        >
        <Paper elevation={3} >

        <Stack sx={{ display: "flex", 
        alignItems: "center",
        justifyContent: "center", mt: 5, mb: 5}}>  
          <Avatar sx={{ objectFit: 'cover', width: 200, height: 'auto' }} src={logo}/>
        </Stack>

          <Box sx={{
            pl: 5,
            pr: 5,
            pb: 5,
            mb: 1.5,
            display: 'grid',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

          <Typography sx={{textAlign: 'center'}} component="h1" variant="h5">Sign in</Typography>
          <Typography sx={{textAlign: 'center'}} variant="a">Use your Typo.io account</Typography>
          <Box
           component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}  >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username" 
              autoFocus 
              onChange={handleChange} 
              value={username}
              />
            <Button
              id="form-btn" 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Paper>
        </Box>
      </Container>
    </ThemeProvider>
    );
  }
  
export default WelcomePage;
  