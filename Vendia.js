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
    if (this.props.dob === listPerson.items[0].dob) {
      alert("Match!")
    } else {
      alert("Incorrect Match!")
    }
    try{
      this.props.setDataDMV(listPerson);
    } catch(error){
      this.props.setDataDMV(null);
    }
    console.log(this.props.dob)
    console.log(this.props.ssn)
    const listFile = await storage.files.list({
      filter: {
        sourceKey: {
           contains: this.props.ssn
        }
      }
    });

    try{
      this.props.setFile(listFile);        
    } catch(error){
        this.props.setFile(null);
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

    try{
      this.props.setDataSS(listPerson);
    } catch(error){
      this.props.setDataSS(null);
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

    try{
      this.props.setDataDOS(listPerson);
    } catch(error){
      this.props.setDataDOS(null);
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
      alert("ERROR: PLEASE ENTER THE FULL SOCIAL SECURITY NUMBER")
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
