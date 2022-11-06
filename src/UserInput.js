import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Vendia from './Vendia';

class UserInput extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         value: '',
         showPassword: false,
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleClickShowPassword  = this.handleClickShowPassword .bind(this);
      this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
   }
   
   handleChange(event) {
      const value = event.target.value; //formatSSN(event.target.value);
      this.setState({value: value});
   }

   handleClickShowPassword (event) {
      this.setState({
         showPassword: !this.state.showPassword,
      })
   }
   
   handleMouseDownPassword(event) {
      event.preventDefault();
    };


   render() {
      return (
         <>
         <Vendia 
            value={this.state.value}
         />

         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
         >
            <TextField
               id = "outlined-adornment-password"
               label = "SSN"
               type={this.state.showPassword ? 'text' : 'password'}
               value = {this.state.value}
               onChange = {this.handleChange}
            InputProps={{
            endAdornment: (
               <InputAdornment position="end">
               <IconButton
               aria-label="toggle password visibility"
               onClick={this.handleClickShowPassword}
               onMouseDown={this.handleMouseDownPassword}
               edge="end"
               >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}

               </IconButton>
            </InputAdornment>
            )
            }}
            />
         </Grid>
         </>
       );

     }

}

export default UserInput;

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