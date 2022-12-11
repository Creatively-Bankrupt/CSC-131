import React from "react";
import { Grid } from "@mui/material";
import Other from './Other';
import UserInput from "./UserInput";
import Vendia from "./Vendia";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Alert from '@mui/material/Alert';
import Login from './Login';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showPassword: false,
      data: '',
      file: '',
      type: [ 'dmv' ],
      dobValue: '',
      handleChange: '',
      
      sendAlert: false,
      alertType: 'success',
      alertMessage: 'Data obtained',

      auth: false,
      user: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleClickShowPassword  = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.setData = this.setData.bind(this);
    this.setType = this.setType.bind(this);
    this.setFile = this.setFile.bind(this);
    this.setDataSS = this.setDataSS.bind(this);
    this.setDataDOS = this.setDataDOS.bind(this);
    this.setDataDMV = this.setDataDMV.bind(this);

    this.sendAlert = this.sendAlert.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
    this.setAlertType = this.setAlertType.bind(this);

    this.setAuth = this.setAuth.bind(this);
    this.setUser = this.setUser.bind(this);

  }

  setType (newType) {
    this.setState({type: newType});
  }
  // get unparsed data
  setData (newData){
    this.setState({data: newData});
  }
  // get data from DMV search
  setDataDMV (newData){
    this.setState({dataDMV: newData});
    console.log(this.state.dataDMV);
  }
  // get data from DMV search
  setDataSS (newData){
    this.setState({dataSS: newData});
    console.log(this.state.dataSS);
  }
  // get data from DMV search
  setDataDOS (newData){
    this.setState({dataDOS: newData});
    console.log(this.state.dataDOS);
  }

  setFile (newFile){
    this.setState({file: newFile});
  }

  setAuth (auth){
    this.setState({auth: auth});
  }

  setUser (user){
    this.setState({user: user});
  }

  sendAlert (seconds){
    if (!this.state.sendAlert) {
      this.setState({sendAlert: true})
      setTimeout(() => {
        this.setState({sendAlert: false})
      }, seconds * 1000);
    }
  }

  setAlertMessage (alert){
    this.setState({alertMessage: alert});
  }

  setAlertType (alert){
    this.setState({alertType: alert});
  }

  handleChange (event) {
    const ssnValue = event.target.value;
    this.setState({value: formatSSN(ssnValue)});
    console.log(this.state.value);
  }

  handleChangeDOB (event) {
    const dobValue = event.target.value;
    this.setState({dobValue: formatDOB(dobValue)});
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
            { (!this.state.auth) && <Login auth={this.state.auth} setAuth={this.setAuth} user={this.state.user} setUser={this.setUser}/> }
            
            { (this.state.auth) && <Other auth={this.state.auth} setAuth={this.setAuth} user={this.state.user} setUser={this.setUser}/> }

            { (this.state.sendAlert && 
            <div style={{ position: "absolute", top: 100, left: 0, right: 0, zIndex: 999 }}>
              <Alert variant="filled" severity={this.state.alertType}>
                {this.state.alertMessage}
              </Alert>
            </div>)
             }
          </Grid>

          { (this.state.auth) && <Grid item xs = {12} alignItems="center" justifyContent="center">
            <UserInput 
              password={this.state.value}
              showPassword={this.state.showPassword}
              handleChange={this.handleChange}
              handleChangeDOB={this.handleChangeDOB}
              dobValue={this.state.dobValue}
              handleClickShowPassword={this.handleClickShowPassword}
              handleMouseDownPassword={this.handleMouseDownPassword}
            ></UserInput>
          </Grid> }
        </Grid>
        
        { (this.state.auth) && <Grid 
          container 
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '10vh' }}>
          <Buttons value={this.state.type} setType={this.setType}></Buttons>
        </Grid> }

        { (this.state.auth) && <Grid style={{ minHeight: '10vh' }}>
          <Vendia 
            dob={this.state.dobValue} 
            ssn={this.state.value} 
            setDataDMV={this.setDataDMV} 
            setDataSS={this.setDataSS} 
            setDataDOS={this.setDataDOS} 
            setFile={this.setFile} 
            sendAlert={this.sendAlert}
            setAlertMessage={this.setAlertMessage}
            setAlertType={this.setAlertType}
          ></Vendia>
        </Grid> }
        
        { (this.state.auth) && <Grid container item justifyContent="center" alignItems="center">
           
            { (this.state.dataDMV != null && this.state.dataDMV.items != null 
              && this.state.file != null && this.state.file.items != null 
              && isTypeValid(this.state.type, "dmv")) 
              && createCard("Department of Motor Vehicles", this.state.dataDMV.items[0], this.state.file?.items[0]) }

            { (this.state.dataSS != null && this.state.dataSS.items != null 
              && this.state.file != null && this.state.file.items != null 
              && isTypeValid(this.state.type, "ssn")) 
              && createCard("Social Security", this.state.dataSS.items[0], this.state.file?.items[0]) }

            { (this.state.dataDOS != null && this.state.dataDOS.items != null 
              && this.state.file != null && this.state.file.items != null 
              && isTypeValid(this.state.type, "dos")) 
              && createCard("Department of State", this.state.dataDOS.items[0], this.state.file?.items[0]) } 

        </Grid> }

      </>

    );

  }

}

export default App;

function isTypeValid(data, value){
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

function formatDOB(value) {
  
  if (!value) return value;
  const dobLength = value.length;

  // This removes all unnecessary characters
  value = value.replace(/[^\d]/g, '');

	if (dobLength < 3) return value;
	else if (dobLength < 5) return `${value.slice(0, 2)}/${value.slice(2, 4)}`;

  return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
}
