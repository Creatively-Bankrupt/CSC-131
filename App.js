import React from "react";
import { Grid } from "@mui/material";
import Other from './Other';
import UserInput from "./UserInput";
import Vendia from "./Vendia";
import Buttons from "./Buttons";
import Cards from "./Cards";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showPassword: false,
      data: '',
      file: '',
      type: [ 'dmv' ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword  = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.setData = this.setData.bind(this);
    this.setType = this.setType.bind(this);
    this.setFile = this.setFile.bind(this);
  }

  setType (newType) {
    this.setState({type: newType});
  }
  
  setData (newData){
    this.setState({data: newData});
  }

  setFile (newFile){
    this.setState({file: newFile});
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
        
        <Grid 
          container 
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '10vh' }}>
          <Buttons value={this.state.type} setType={this.setType}></Buttons>
        </Grid>

        <Vendia ssn={this.state.value} setData={this.setData} setFile={this.setFile}></Vendia>

        <Grid container item justifyContent="center" alignItems="center" gap={2}>

            {/* { (this.state.data != null && this.state.data.items != null && isTypeValid(this.state.type, "dmv")) && createCard("Department of Motor Vehicles", this.state.data.items[0], this.state.file?.items[0]) }

            { (this.state.data != null && this.state.data.items != null && isTypeValid(this.state.type, "ssn")) && createCard("Social Security", this.state.data.items[0], this.state.file?.items[0]) }

            { (this.state.data != null && this.state.data.items != null && isTypeValid(this.state.type, "dos")) && createCard("Department of State", this.state.data.items[0], this.state.file?.items[0]) } */}

            { (this.state.data != null && this.state.data.items != null && this.state.file != null && this.state.file.items != null && isTypeValid(this.state.type, "dmv")) && createCard("Department of Motor Vehicles", this.state.data.items[0], this.state.file?.items[0]) }

            { (this.state.data != null && this.state.data.items != null && this.state.file != null && this.state.file.items != null && isTypeValid(this.state.type, "ssn")) && createCard("Social Security", this.state.data.items[0], this.state.file?.items[0]) }

            { (this.state.data != null && this.state.data.items != null && this.state.file != null && this.state.file.items != null && isTypeValid(this.state.type, "dos")) && createCard("Department of State", this.state.data.items[0], this.state.file?.items[0]) } 
            {/* <Grid item xs = "4" sm = "4">
            { (this.state.data != null && this.state.data.items != null &&  isTypeValid("ssn")) && createSSCard(this.state.data.items[0]) }
            </Grid>
            <Grid item xs = "4" sm = "4">
            { (this.state.data != null && this.state.data.items != null &&  isTypeValid("dos")) && createDOSCard(this.state.data.items[0]) }
            </Grid> */}

        </Grid>

      </>

    );

  }

}

export default App;

function isTypeValid(data, value, file){
  if (data[0] != null) return data[0] == (value) || data[1] == (value) || data[2] == (value)
  return false;
}

function createCard(type, data, file) {
  if (data != null){
    return (
      <Cards
      type={type}
      firstName={data.firstName}
      lastName={data.lastName}
      dl={data.dl}
      dob={data.dob}
      passportNumber={data.passportNumber}
      passportExpiration={data.passportExpiration}
      ssn={data.ssn}
      image={file.temporaryUrl}
      ></Cards>
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