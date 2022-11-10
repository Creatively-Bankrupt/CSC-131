import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}


export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936,maxHeight: '100%', margin: 'none', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            <Typography variant="h5" align="center">
              Department of Motor Vehicles
            </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography variant="body2" color="text.secondary" align="center">
	    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
	      <Item sx={{height: 200, width: 150}}>Placeholder Image</Item>
		  <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
		    <Item sx={{width: 250}}>Full Name</Item>
			<Item sx={{width: 250}}>Date of Birth</Item>
		    <Item sx={{width: 200}}>Drivers License Number</Item>
		  </Box>
	    </Box>
      </Typography>
    </Paper>
  );
}