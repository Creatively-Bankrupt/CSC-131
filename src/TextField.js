import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { StyleSheet, View } from "react-native";
import DepState from './images/dep_of_state_logo.png'


export default function InputAdornments() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });


  // This is for checking the max lengths along with formatting the string into the correct format
  const handleChange = (prop) => (event) => {
    if (event.target.value.length <= 11){
      if ((event.target.value.length == 3) || (event.target.value.length == 6)) {
        event.target.value = event.target.value.concat("-");
      } else if (event.target.value.endsWith("-")) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1);
      }
      setValues({ ...values, [prop]: event.target.value});
    }
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
            backgroundColor: '#EDF1F2',
          },
        ]}>

          <FormControl sx={{ m: 1, width: '25ch'}} >
            <InputLabel htmlFor="outlined-adornment-password">SSN</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
      
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
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
      </View>
    </View>
  );
}
//<img src = {DepState} className = "DepState" alt = ""/>
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 225,
    width: 600,
    justifyContent: 'center',
    alignItems :'flex-end',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },

  dep_logo:{
    height: 200,
    width: 200,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }

});