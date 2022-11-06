import { createVendiaClient } from "@vendia/client";
import { Grid } from "@mui/material";

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
            dl: {
               contains: this.props.value, 
            }
         }
      });

      alert(listPerson.items[0].firstName 
         + " " 
         + listPerson.items[0].lastName
         + " " 
         + listPerson.items[0].dl);

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
            <button onClick={this.handleSubmitList}>list</button>
         </Grid>
      )
   }
      
}

export default Vendia;
