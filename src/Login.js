import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Typography from '@mui/material/Typography';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import IconButton from '@mui/material/IconButton';

export default function MenuAppBar(props) {
		
	function handleCallbackResponse(response){
		console.log("Encoded JWT ID token: " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		props.setUser(userObject);
    console.log(props.auth);
    console.log(props.setAuth(true));
    console.log(props.auth);
    props.setAuth(true);
		document.getElementById("signInDiv").hidden = true;
	}
	
	function handleSignOut(event) {
	  props.setUser({});
    props.setAuth(false);
	  document.getElementById("signInDiv").hidden = false;
	}
	
	useEffect(() => {
	  /* global google */
	  google.accounts.id.initialize({
		  client_id: "727101166460-12lpocj8ogvsj4s0tf5rtve1rovauvei.apps.googleusercontent.com",
		  callback: handleCallbackResponse
	  });
	  
	  google.accounts.id.renderButton(
	    document.getElementById("signInDiv"),
		{ theme: "outline", size: "large"}
		);
    
	}, []);
	
// If no user: show sign in button
// If user: show logout button

  return (
    <div style= {{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: "100vh",
      backgroundRepeat: 'no-repeat'}}>
    
    <Grid container direction="row" justifyContent="flex-end" alignItems="stretch">
      <Card variant="outlined" sx={{xs: 'auto', height: '100vh', width: '75vh', background: 'rgba(255,255,255, 0.9)'}} >
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{height:'100vh' }}>

          <Grid container justifyContent="center" alignItems="center" style={{paddingTop: '15px' }} direction="column">

            <div style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/abstract-dark-blurred-background-smooth-gradient-texture-color-shiny-bright-website-pattern-banner-header-sidebar-graphic-art-image_1258-83074.jpg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >

                <AirplaneTicketIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
                <Typography
                  variant="h2"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  TRAVELX
                </Typography>
              </Grid>

            </div>

            <Grid sx={{m: 2}}>
              <div id="signInDiv"></div>
            </Grid>

          </Grid> 

        </Grid>
       </Card> 
    </Grid>
  
  </div>

  
);
}
