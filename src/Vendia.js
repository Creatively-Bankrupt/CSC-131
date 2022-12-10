import { createVendiaClient } from "@vendia/client";
import { Grid, Button } from "@mui/material";
import { ssUni } from './SsClient';
import { dosUni } from './DosClient';

import React from 'react';


export const client = createVendiaClient({
  apiUrl: `https://525isitnw3.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://4tiko4jch8.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: '6xZzW8nrMT4etYAHMDAM9upfm3AeYDqR4i7WBJrvnYT1',
});

export const { entities } = client;
export const { storage } = client;

class Vendia extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmitList = this.handleSubmitList.bind(this);
  }

  // Search DMV Uni
  async listPersonDMV(ssn) {
    const listPerson = await entities.person.list({
      filter: {
        ssn: {
           contains: ssn, 
        }
      }
    });

    const listFile = await storage.files.list({
      filter: {
        sourceKey: {
          contains: this.props.ssn
        }
      }
    });

    this.props.sendAlert(5);
    if (listPerson.items[0] == null) {
      this.props.setDataDMV(null);
      this.props.setFile(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
      return;
    }
    
    if (this.props.dob != listPerson.items[0].dob) {
      this.props.setDataDMV(null);
      this.props.setFile(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
      return;
    }
  
    try{
      this.props.setDataDMV(listPerson);
      this.props.setFile(listFile);        
      this.props.setAlertMessage("Matching successful");
      this.props.setAlertType("success");
    } catch(error){
      this.props.setDataDMV(null);
      this.props.setFile(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
    }

  }

  // Search Social Security Uni
  async listPersonSS(ssn) {
    const listPerson = await ssUni.person.list({
      filter: {
        ssn: {
           contains: ssn,
        }
      }
    });

    this.props.sendAlert(5);
    if (listPerson.items[0] == null) {
      this.props.setDataSS(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
      return;
    }
    
    if (this.props.dob != listPerson.items[0].dob) {
      this.props.setDataSS(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
      return;
    }
  
    try{
      this.props.setDataSS(listPerson);
      this.props.setAlertMessage("Matching successful");
      this.props.setAlertType("success");
    } catch(error){
      this.props.setDataSS(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
    }

  }

  // Search Department of State
  async listPersonDOS(ssn) {
      const listPerson = await dosUni.person.list({
        filter: {
          ssn: {
            contains: ssn, 
          }
        }
      });

      const listFile = await storage.files.list({
        filter: {
          sourceKey: {
            contains: this.props.ssn
          }
        }
      });

    this.props.sendAlert(5);
    if (listPerson.items[0] == null) {
      return;
    }
    
    if (this.props.dob != listPerson.items[0].dob) {
      this.props.setDataDOS(null);
      this.props.setFile(listFile);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
      return;
    }
  
    try{
      this.props.setDataDOS(listPerson);
      this.props.setFile(listFile);
      this.props.setAlertMessage("Matching successful");
      this.props.setAlertType("success");
    } catch(error){
      this.props.setDataDOS(null);
      this.props.setFile(null);
      this.props.setAlertMessage("Matching unsuccessful");
      this.props.setAlertType("error");
    }

  }

  // run ALL 3 searches on click
  handleSubmitList (event) {
    event.preventDefault();
    if (this.props.ssn.length === 11){
      this.listPersonDMV(this.props.ssn);
      this.listPersonSS(this.props.ssn);
      this.listPersonDOS(this.props.ssn);
    } else {
      this.props.sendAlert(5);
      this.props.setAlertType("error");
      this.props.setAlertMessage("Enter in a full 11 digit SSN");
    }
  }

  render(){
    return(
      <>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button 
            variant="outlined"
            size="small"
            onClick={this.handleSubmitList}>Search
          </Button>
        </Grid>
      </>
    )
  }
}

export default Vendia;
