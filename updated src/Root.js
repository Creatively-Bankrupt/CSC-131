import React from 'react'
import { Button, ButtonGroup, Grid } from "@mui/material";

export default function root() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
>    
        <ButtonGroup 
        variant="contained" 
        aria-label="medium secondary button group" 
        color = "secondary" 
        sx = {{ p: 1 }}>
          <Button 
          fullWidth = "bool">Department of Motor Vehicles
          </Button>
          <Button 
          fullWidth = "bool">Social Security
          </Button>
          <Button 
          fullWidth = "bool">Department of State
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  )
}
