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


import BackgroundSlider from 'react-background-slider' //unused slider and images for background i couldnt get to work 
import img_1 from './images/img_1.png'
import img_2 from './images/img_2.png'
 

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div style= {{ 
      backgroundImage: `url("https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg")`,
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
    <Grid container display="flex" direction="column" alignItems="center" justifyContent="center">
    <Card variant="outlined" sx={{xs: 'auto', height: 350, width: 275, background: 'rgba(255,255,255, 0.9)'}} >
          <Typography 
            variant="h5" 
            sx = {{
              fontFamily: 'Tahoma',
              fontWeight: 700, 
              color: '#2D69CC'
              }}>
            Login 
          </Typography>
          <TextField
            required
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch'}}
          />

          <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ m: 1, width: '25ch'}}
        />

        <Button variant="contained" sx= {{bgcolor: '#2D69CC', color: '#FFFFFF', fontFamily: 'monospace', }}>
          Sign In
        </Button>
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
