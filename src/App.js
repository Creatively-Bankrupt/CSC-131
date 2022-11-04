import React from "react";
import Other from "./Other";
import Vendia from "./Vendia";
import { Grid } from "@mui/material";
import CardsDMV from "./CardsDMV";
import CardsSSN from "./CardsSSN";
import CardsDOS from "./CardsDOS";
import UserInput from "./UserInput";

function App() {
  return (
    <>
<Grid container spacing={2}>
    <Grid item xs = {12}>
      <Other />  {/** Travel X Logo */}
    </Grid>

    <Grid item xs = {12}>
      <Vendia /> {/** Vendia List 1st person and Vendia Add Test User */}
    </Grid>

    <Grid item xs = {12}>
      <UserInput />
    </Grid>

    <Grid item xs = {4}>
      <CardsDMV /> {/** DMV Card with person info **/}
    </Grid>

    <Grid item xs = {4}>
      <CardsSSN /> {/** DMV Card with person info **/}
    </Grid>

    <Grid item xs = {4}>
      <CardsDOS /> {/** DMV Card with person info **/}
    </Grid>
    </Grid>
    </>
  );
}
export default App;
