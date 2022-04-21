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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';





function SignUp() {


  const theme = createTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: "",
        picture: ""
    })
    
    const {name,email, bio, picture} = formData

    function handleNameChange(event) {
        setFormData({
          ...formData,
          name: event.target.value
        });
    }
    function handleEmailChange(event) {
      setFormData({
        ...formData,
        email: event.target.value
      });
    }
    function handleBioChange(event) {
      setFormData({
        ...formData,
      bio: event.target.value
      });
    }
    function handlePictureChange(event) {
      setFormData({
        ...formData,
      picture: event.target.value
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        type="text" 
                        id="name" 
                        placeholder="name" 
                        value={name} 
                        onChange={handleNameChange}
                        required
                        fullWidth
                        label="Name"
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
                        onChange={handleEmailChange}
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
                        onChange={handleBioChange}
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
                        onChange={handlePictureChange}
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
              </Box>
              </Box>
              </Paper>
              </Box>
            </Container>
          </ThemeProvider>
    );
  }
  
  export default SignUp;
  

      // <div>
    //   <h2>Typo</h2>
    //   <h1>Hello this is the Sign-Up Page</h1>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" id="name" placeholder="name" value={name} onChange={handleChange}/>
    //         <input type="text" id="email" placeholder="email" value={email} onChange={handleChange}/>
    //         <input type="text" id="bio" placeholder="bio" value={bio} onChange={handleChange}/>
    //         <input type="text"  id="picture" placeholder="link to profile picture" value={picture} onChange={handleChange}/>
    //         <button onClick={handleSubmit} type="submit">Sign-up</button>
    //     </form>
    // </div>