import React from 'react'
import travelX from './images/travelXLogo.png'
import { Grid, } from '@mui/material'

export default function Other() 
{
  return (
  <div className = "app">
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '10vh' }}>   
    <br /><br />
    <img src = {travelX} className = "travelX" alt = "" />
    <br /><br />
    </Grid>
  </div>
  )
}
