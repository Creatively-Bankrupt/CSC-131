import React from "react";
import Other from "./Other";
import Vendia from "./Vendia";
import { Grid } from "@mui/material";
import CardsDMV from "./CardsDMV";
import CardsSSN from "./CardsSSN";
import CardsDOS from "./CardsDOS";
import UserInput from "./UserInput";
import ImageUpload from "./ImageUpload";

function App() {

  return (
    <>
      <Grid container spacing={30}>
      <Grid item xs = {12}>
        <Other />  {/** Travel X Logo */}
      </Grid>

      <Grid item xs = {12}
            alignItems="center"
            justifyContent="center"
      >
        <UserInput />
      </Grid>

      <Grid item xs = {4}>
        <ImageUpload /> 
      </Grid>

       <Grid item xs = {4}>
        <CardsDMV /> 
      </Grid>

      <Grid item xs = {4}>
        <CardsSSN /> 
      </Grid>

      <Grid item xs = {4}>
        <CardsDOS /> 
      </Grid>  
      
      </Grid>
    </>
  );

}

export default App;
