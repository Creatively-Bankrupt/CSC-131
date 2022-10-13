import React from 'react'
import { Checkbox, Grid } from '@mui/material'

export default function Check() {
 return (
	<div>
  	<Grid
			container
      direction="row"
      alignItems=""
      justifyContent="center"
      style={{ minHeight: '10vh' }}> 
      	<Checkbox></Checkbox>
       	<Checkbox></Checkbox>
        <Checkbox></Checkbox>
      </Grid>
    </div>
  )
}
