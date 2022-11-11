import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Vendia from "./Vendia";

export default class UserInput extends React.Component{

   constructor(props){
      super(props)
      console.log(this.props.showPassword);
   }
   
   render(){
      return (
         <>
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
            type={this.props.showPassword ? 'text' : 'password'}
            value = {this.props.password}
            onChange = {this.props.handleChange}
            InputProps={
               {
                  endAdornment: (
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.props.handleClickShowPassword}
                        onMouseDown={this.props.handleMouseDownPassword}
                        edge="end"
                     >
                     {this.props.showPassword ? <VisibilityOff /> : <Visibility />}
   
                  </IconButton>
               </InputAdornment>
                  )
               }
            }
         ></TextField>

         </Grid>
         </>
      )
   }

}
