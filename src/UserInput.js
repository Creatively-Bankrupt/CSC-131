import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function UserInput(){

return(
   <Grid 
      alignItems="center" 
      direction="row"
      justifyContent="center">

   <TextField
      id="outlined-password-input"
      label="Social Security Number"
      type="password"
        />
   </Grid>
        )           
}