import { createVendiaClient } from "@vendia/client";
import { useState } from "react";
import { Grid } from "@mui/material";

export default function Vendia(){
   const client = createVendiaClient({
      apiUrl: `https://525isitnw3.execute-api.us-west-2.amazonaws.com/graphql/`,
      websocketUrl: `wss://4tiko4jch8.execute-api.us-west-2.amazonaws.com/graphql`,
      apiKey: '6xZzW8nrMT4etYAHMDAM9upfm3AeYDqR4i7WBJrvnYT1'
    });
   const { entities } = client;
   console.log(entities);
   const [person, setPerson] = useState(" ");
   const [loading, setLoading] = useState(true); 

   async function listPerson(){
      const listPerson = await entities.person.list();
      setLoading(false)
      console.log(listPerson)
      setPerson(listPerson)
   }

   async function addPerson(){
      const productResponse = await entities.person.add({
         firstName: "new",
         lastName: "person",
         dl: "ca23199",
         dob: "09291994",
         passportNumber: "415156",
         passportExpiration: "09292023"
       });
      console.log(productResponse)
      }
   function handleSubmitList(event) {
      event.preventDefault();
      listPerson();
    }
   function handleSubmitAdd(event) {
      event.preventDefault();
      addPerson();
    }
   return(
      <div>
      <Grid
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
         style={{ minHeight: '10vh' }}>
            
         <button onClick={handleSubmitList}>list</button>
         
         <button onClick={handleSubmitAdd}>add</button>
         { loading === false && 
         <div>
            <Grid xs={12}>
               {person.items[3].firstName}
            <Grid xs={12}>
               {person.items[3].lastName}
            </Grid>
            <Grid xs={12}>
               {person.items[3].dl}
            </Grid>
            </Grid>
         </div>
         }
         </Grid>
      </div>
   )
}
