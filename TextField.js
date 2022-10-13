import React from 'react'
import {  Grid, TextField } from "@mui/material";

export default function UserText() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '10vh' }}>     
        <TextField 
        id="filled-basic" 
        label="SS#" 
        variant="filled" />
      </Grid>
    </div>
  )
}