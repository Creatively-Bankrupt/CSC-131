import React from "react";
import { Grid } from "@mui/material";
import Other from './Other';
import UserInput from "./UserInput";
import Vendia from "./Vendia";
import DMVCard from "./DMVCard";
import SSCard from "./SSCard";
import DOSCard from "./DOSCard";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
       value: '',
       showPassword: false,
       data: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword  = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.setData = this.setData.bind(this);
  }
  
  setData (newData){
    this.setState({data: newData});
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({value: formatSSN(event.target.value)});
  }

  handleClickShowPassword (event) {
    this.setState({
      showPassword: !this.state.showPassword,
    })
  }

  handleMouseDownPassword (event) {
    event.preventDefault();
  };

  render(){
    return (
      <>
        <Grid container spacing={30}>

          <Grid item xs = {12}>
            <Other />  {/** Travel X Logo */}
          </Grid>

          <Grid item xs = {12} alignItems="center" justifyContent="center">
            <UserInput 
              password={this.state.value}
              showPassword={this.state.showPassword}
              handleChange={this.handleChange}
              handleClickShowPassword={this.handleClickShowPassword}
              handleMouseDownPassword={this.handleMouseDownPassword}
            ></UserInput>
          </Grid>
        </Grid>

        <Vendia ssn={this.state.value} setData={this.setData}></Vendia>

        <Grid container direction = "row" spacing={3}>
          <Grid item xs = "4" sm = "4">
          { (this.state.data != null && this.state.data.items != null) && createDMVCard(this.state.data.items[0]) }
          </Grid>
          <Grid item xs = "4" sm = "4">
          { (this.state.data != null && this.state.data.items != null) && createSSCard(this.state.data.items[0]) }
          </Grid>
          <Grid item xs = "4" sm = "4">
          { (this.state.data != null && this.state.data.items != null) && createDOSCard(this.state.data.items[0]) }
          </Grid>
        </Grid>

      </>

    );

  }

}

export default App;

function createDMVCard(data) {
  if (data != null){
    return (
      <DMVCard
      type="Department of Motor Vehicles"
      firstName={data.firstName}
      lastName={data.lastName}
      dob={data.dob}
      dl={data.dl}
      ></DMVCard>
    );
  }
}

function createSSCard(data) {
  if (data != null){
    return (
      <SSCard
      type="Social Security"
      firstName={data.firstName}
      lastName={data.lastName}
      dob={data.dob}
      dl={data.dl}
      ></SSCard>
    );
  }
}

function createDOSCard(data) {
  if (data != null){
    return (
      <DOSCard
      type="Department of State"
      firstName={data.firstName}
      lastName={data.lastName}
      dob={data.dob}
      passportNumber={data.passportNumber}
      passportExpiration={data.passportExpiration}
      ></DOSCard>
    );
  }
}

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