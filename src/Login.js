import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
	
	const [ user, setUser ] = useState({});
	
	function handleCallbackResponse(response){
		console.log("Encoded JWT ID token: " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		setUser(userObject);
		document.getElementById("signInDiv").hidden = true;
	}
	
	function handleSignOut(event) {
	  setUser({});
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
    
<AppBar position="static" color = {"primary"} style={styles.paperContainer}>
      <Toolbar>
        <AirplaneTicketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
        <Typography
            variant="h6"
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
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx = {{ color: 'white'}}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <Grid container direction="row" justifyContent="flex-end" alignItems="stretch">
    <Card variant="outlined" sx={{xs: 'auto', height: '90vh', width: '75vh', background: 'rgba(255,255,255, 0.9)'}} >
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{height:'100vh' }}>
          <Typography 
            variant="h3" 
            align="center"
            sx = {{
              fontFamily: 'Montserrat',
              fontWeight: 500, 
              color: '#2D69CC'
              }}>
            Login 
          </Typography>

          <TextField
            required
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '35ch'}}
          />

          <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ m: 1, width: '35ch'}}
        />
        <Button variant="contained" alignItems="center" sx= {{bgcolor: '#2D69CC', color: '#FFFFFF', fontFamily: 'monospace',m: 1, width: '25ch'}}>
          Sign In
        </Button>

        <Divider sx = {{fontFamily: 'Montserrat', color: '#2D69CC', width:'90%', height:'2%'}}>or </Divider>
        <Grid container justifyContent="center" alignItems="center" style={{paddingTop: '15px' }} >
          <div id="signInDiv"></div>
	          { Object.keys(user).length != 0 &&
	            <button onClick={ (e) => handleSignOut(e)}> Sign Out </button>
	          }
	
	          { user &&
	            <div>
	              <img src={user.picture}></img>
		            <h3>{user.name}</h3>
	          </div>
	          }
           </Grid> 

          <Divider sx = {{width:'80%', height:'2%'}}></Divider>

          <Button variant="text" sx = {{fontFamily: 'Montserrat',fontWeight: 500, color: '#2D69CC'}}>Need an account? Sign up.</Button>

        </Grid>
       </Card> 
    </Grid>
  </div>

  
);
}

const styles = {
  paperContainer: {
    backgroundImage:`url(${"https://img.freepik.com/free-photo/abstract-dark-blurred-background-smooth-gradient-texture-color-shiny-bright-website-pattern-banner-header-sidebar-graphic-art-image_1258-83074.jpg"})`, 
    minHeight : '10vh',
  }
};
