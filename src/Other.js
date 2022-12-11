import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Alert from '@mui/material/Alert';


// const pages = ['Flights', 'Customer Support', 'Refunds'];

const ResponsiveAppBar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleSignOut(event) {
	  props.setUser({});
    props.setAuth(false);
	  document.getElementById("signInDiv").hidden = false;
	}

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar color={"primary"} style={styles.paperContainer}>
        <Container>
          <Toolbar disableGutters >
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
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

    </>
  );
}

const styles = {
  paperContainer: {
    backgroundImage:`url(${"https://img.freepik.com/free-photo/abstract-dark-blurred-background-smooth-gradient-texture-color-shiny-bright-website-pattern-banner-header-sidebar-graphic-art-image_1258-83074.jpg"})`, 
    minHeight : '10vh',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  }
};

export default ResponsiveAppBar;
