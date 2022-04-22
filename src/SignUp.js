import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../src/images/Typo.mock-06.png"
////////////////////////////////////// MUI

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

function SignUp() {


  const theme = createTheme();

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        bio: "",
        picture: ""
    })
    
    const {username, first_name, last_name, email, bio, picture} = formData

    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/');
  }


    return (
  
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              
              <Box 
                  sx={{
                maxWidth: 'xs',
                marginTop: 10,
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

              <Box
                sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                  <Box sx={{
                      pl: 5,
                      pr: 5,
                      pb: 5,
                      mb: 1.5,
                      display: 'grid',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        type="text" 
                        id="username" 
                        placeholder="username" 
                        value={username} 
                        onChange={handleChange}
                        required
                        fullWidth
                        label="username"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text" 
                        id="first_name" 
                        placeholder="first name" 
                        value={first_name} 
                        onChange={handleChange}
                        required
                        fullWidth
                        label="first name"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text" 
                        id="last_name" 
                        placeholder="last name" 
                        value={last_name} 
                        onChange={handleChange}
                        required
                        fullWidth
                        label="last_name"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text" 
                        id="email" 
                        placeholder="email" 
                        value={email} 
                        onChange={handleChange}
                        label="Email Address"
                        name="email"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text" 
                        id="bio" 
                        placeholder="bio" 
                        value={bio} 
                        onChange={handleChange}
                        label="bio"
                        name="bio"
                        autoComplete="bio"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text"  
                        id="picture" 
                        placeholder="link to profile picture" 
                        value={picture} 
                        onChange={handleChange}
                        label="picture"
                        name="picture"
                        autoComplete="picture"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/" variant="body2">
                  {"Sign in instead"}
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
  
  export default SignUp;
  
