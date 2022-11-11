import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

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

export default function DMVCard(props) {
  return (
    <Paper>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs = {"auto"}>
            <Typography variant="h5" align="center">
              {props.type}
            </Typography>
            </Grid>
          </Grid>
        </Toolbar>
        
      </AppBar>
      <Typography variant="body2" color="text.secondary" align="center">
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <Item sx={{height: 200, width: 150}}>
              <Avatar variant='square' sx={{height: 200, width: 150}} src={props.image} /></Item>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Item xs = "auto"> Name: {props.firstName} {props.lastName}</Item>
            <Item xs = "auto"> Birth Date: {props.dob}</Item>
            <Item xs = "auto">Drivers License: {props.dl}</Item>
          </Box>
        </Box>
      </Typography>
    </Paper>
  );
}
