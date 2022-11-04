import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function UserInput(){

   const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });

  // This is for checking the max lengths along with formatting the string into the correct format
  const handleChange = (prop) => (event) => {
    var value = event.target.value;
    setValues({ ...values, [prop]: formatSSN(value)});
  };
  
   const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


   return(

      <Grid 
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
      >

      <TextField
         id="outlined-adornment-password"
         label="Social Security Number"
         type={values.showPassword ? 'text' : 'password'}
         value={values.password}
         onChange={handleChange('password')}
         onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            }
         }}
         InputProps={{
            endAdornment: (
               <InputAdornment position="end">
               <IconButton
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
               onMouseDown={handleMouseDownPassword}
               edge="end"
               >
               {values.showPassword ? <VisibilityOff /> : <Visibility />}
               
               </IconButton>
            </InputAdornment>
            )
         }}
      />
      </Grid>
   )

}

// This formats the String into SSN

function formatSSN(value) {
  
   if (!value) return value;
   const ssnLength = value.length;
 
   // This removes all unnecessary characters
   value = value.replace(/[^\d]/g, '');
 
   if (ssnLength < 4) return value;
 
   if (ssnLength < 6) {
     return `${value.slice(0, 3)}-${value.slice(3)}`;
   }
 
   return `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 9)}`;
 }