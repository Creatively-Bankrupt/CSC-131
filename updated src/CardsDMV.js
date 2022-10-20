import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936,maxHeight: '100%', margin: 'auto', overflow: 'hidden' }}>
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
              DMV
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
              Test User
            </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography variant="body2" color="text.secondary" align="center">
      <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <p>
        Test User Info listed here
        </p>
        <br />
      </Typography>
    </Paper>
  );
}