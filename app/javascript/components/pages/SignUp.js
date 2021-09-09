import React, { Component } from 'react'
import {
  Grid,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
  }
})

class SignUp extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <Grid>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField aria-label="First Name"/>
            <FormLabel>Last Name</FormLabel>
            <TextField/>
            <FormLabel>User Name</FormLabel>
            <TextField/>
            <FormLabel>State</FormLabel>
            <TextField/>
            <FormLabel>Role</FormLabel>
            <RadioGroup aria-label="role" name="role" >
              <FormControlLabel value="Looking For Pet" control={<Radio />} label="Looking For Pet" />
              <FormControlLabel value="Looking For Home" control={<Radio />} label="Looking For Home" />
            </RadioGroup>
            <FormLabel>E-mail</FormLabel>
            <TextField/>
            <FormLabel>Password</FormLabel>
            <TextField/>
            <FormLabel>Confirm Password</FormLabel>
            <TextField/>
          </FormControl>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(SignUp)
