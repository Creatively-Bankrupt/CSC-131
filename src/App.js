import React from "react";
import Other from "./Other";
import TextField from "./TextField";
import Vendia from "./Vendia";
import { Grid } from "@mui/material";
import CardsDMV from "./CardsDMV";
import CardsSSN from "./CardsSSN";
import CardsDOS from "./CardsDOS";

function App() {
  return (
    <>
    <Grid container spacing={2}>

    <Grid xs={12}>
      <Other />  {/** Travel X Logo */}
    </Grid>

    <Grid xs={12}>
      <TextField /> {/** User Input Box */}
    </Grid>

    <Grid xs={12}>
      <Vendia /> {/** Vendia List 1st person and Vendia Add Test User */}
    </Grid>

    <Grid xs={4}>
      <CardsDMV />
    </Grid>

    <Grid xs={4}>
      <CardsSSN />
    </Grid>
    
    <Grid xs={4}>
      <CardsDOS />
    </Grid>

    </Grid>
    </>
  );
}
export default App;
