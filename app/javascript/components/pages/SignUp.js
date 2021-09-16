import React, { Component } from 'react'
import {
  Grid,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Button
} from '@material-ui/core'
import { withStyles, } from '@material-ui/core/styles'
import { signUpStyles } from './signUpStyles'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        state: '',
        role: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  }

  handleChange = e => {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = e => {
    e.preventDefault()
    let data = {
      first_name: this.state.form.firstName,
      last_name: this.state.form.lastName,
      state: this.state.form.state,
      role: this.state.form.role,
      email: this.state.form.email,
      password: this.state.form.password,
      password_confirmation: this.state.form.passwordConfirmation
    }
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: data })
    })
      .then(response => {
        this.props.history.push('/')
        window.location.reload(false)
      })
      .catch(err => console.log(err))
  }

  render(){
    const { classes } = this.props
    return(
      <>
        <Grid>
          <FormControl className={classes.form}>
            <Grid className={classes.formRowOne}>
              <Grid className={classes.formGrid}>
                <FormLabel>First Name</FormLabel>
                <TextField aria-label="First Name" className={classes.textInput} variant="outlined" name="firstName" onChange={this.handleChange}/>
              </Grid>
              <Grid className={classes.formGrid}>
                <FormLabel>Last Name</FormLabel>
                <TextField aria-label="Last Name" className={classes.textInput} variant="outlined" name="lastName" onChange={this.handleChange}/>
              </Grid>
              <Grid className={classes.formGrid}>
                <FormLabel>User Name</FormLabel>
                <TextField aria-label="Username" className={classes.textInput} variant="outlined" name="username" onChange={this.handleChange}/>
              </Grid>
            </Grid>
            <Grid className={classes.formRowTwo}>
              <Grid className={classes.formGrid}>
                <FormLabel>State</FormLabel>
                <TextField aria-label="State" className={classes.textInput} variant="outlined" name="state" onChange={this.handleChange}/>
              </Grid>
              <Grid className={classes.formGrid}>
              <FormLabel>Role</FormLabel>
                <RadioGroup aria-label="role" name="role"  onChange={this.handleChange} className={classes.role}>
                  <FormControlLabel value="Looking For Pet" control={<Radio />} label="Looking For Pet" aria-label="Looking For Pet"/>
                  <FormControlLabel value="Looking For Home" control={<Radio />} label="Looking For Home" aria-label="Looking For Home"/>
                </RadioGroup>
              </Grid>
              <Grid className={classes.formGrid}>
                <FormLabel>E-mail</FormLabel>
                <TextField aria-label="Email" type="email" className={classes.textInput} variant="outlined" name="email" onChange={this.handleChange}/>
              </Grid>
            </Grid>
            <Grid className={classes.formRowThree}>
              <Grid className={classes.formGrid}>
                <FormLabel>Password</FormLabel>
                <TextField aria-label="Password" className={classes.textInput} variant="outlined" name="password" onChange={this.handleChange}/>
              </Grid>
              <Grid className={classes.formGrid}>
                <FormLabel>Confirm Password</FormLabel>
                <TextField aria-label="Confirm Password" className={classes.textInput} variant="outlined" name="passwordConfirmation" onChange={this.handleChange}/>
              </Grid>
            </Grid>
            <Button variant="contained" style={{backgroundColor:'fe5f55'}} className={classes.submitButton} onClick={this.handleSubmit}>Sign Up</Button>
          </FormControl>
        </Grid>
      </>
    )
  }
}

export default withStyles(signUpStyles)(SignUp)
