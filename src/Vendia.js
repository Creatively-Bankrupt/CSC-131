import { createVendiaClient } from "@vendia/client";
import { Grid, Button } from "@mui/material";


import React from 'react';

export const client = createVendiaClient({
   apiUrl: `https://525isitnw3.execute-api.us-west-2.amazonaws.com/graphql/`,
   websocketUrl: `wss://4tiko4jch8.execute-api.us-west-2.amazonaws.com/graphql`,
   apiKey: '6xZzW8nrMT4etYAHMDAM9upfm3AeYDqR4i7WBJrvnYT1',
});

export const { entities } = client;

class Vendia extends React.Component {

   constructor(props){
      super(props)
      this.handleSubmitList = this.handleSubmitList.bind(this);
   }

   async listPerson() {

      const listPerson = await entities.person.list({
         filter: {
            ssn: {
               contains: this.props.value, 
            }
         }
      });

      try{
         alert(
         "First Name: \n"
         +
         listPerson.items[0].firstName + "\n" + "\n"
         + "Last Name: \n" 
         + listPerson.items[0].lastName + "\n" + "\n"
         + "Driver License: \n" 
         + listPerson.items[0].dl + "\n" + "\n"
         + "Birth Date: \n"
         + listPerson.items[0].dob + "\n" + "\n"
         + "Passport: \n"
         + listPerson.items[0].passportNumber + "\n" + "\n"
         + "Social Security: \n"
         + listPerson.items[0].ssn + "\n" + "\n"
         );
      } catch(error){
         alert(
            "This Social Security number was not found. Please try again."
         )
      }
   }

   handleSubmitList (event) {
      event.preventDefault();
      this.listPerson();
    }

   render(){
      return(
         <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '10vh' }}>
            <Button 
            variant="outlined"
            size="small"
            onClick={this.handleSubmitList}>Search</Button>
         </Grid>
      )
   }
      
}

export default Vendia;
