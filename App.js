import './App.css';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StyleSheet, View } from "react-native";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  return (
    <View style={styles.root}>
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#e1e4e8'
        },
      ]}>

         <div>
         <View style={[styles.item]} />
         <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            label="Full Name"
          />
          <InputLabel htmlFor="outlined-adornment-password">Full Name</InputLabel>
        </FormControl>
        
        <View style={[styles.item]} />
        <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">SSN</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
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
            }
            label="SSN"
          />
        </FormControl>
      </div>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    height: 200,
    width: 200,
    //alignItems: 'center',
    //justifyContent: 'flex-end',
  }, 
  container: {
    height: 200,
    width: 500,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 16,
  }, 
  item: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
}); 