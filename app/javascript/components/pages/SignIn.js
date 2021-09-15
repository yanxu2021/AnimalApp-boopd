import React from 'react'
import {
    Grid,
    TextField,
    FormControl,
    FormLabel,
    Button
  } from '@material-ui/core'
  import { withStyles } from '@material-ui/core/styles';

  const styles = () => ({
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
  })

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = e => {
        let { form }= this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        let data = {
            email: this.state.form.email,
            password: this.state.form.password
        }
        fetch('/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: data })
        })
        .then(response => {
          console.log(response)
          this.props.history.push('/')
          window.location.reload(false)
        })
        .catch(err => console.log(err))
    }

    render(){
        const {classes} = this.props
        return(
            <>
            <Grid className={classes.root}>
                <FormControl>
                <FormLabel>E-mail</FormLabel>
                <TextField onChange={this.handleChange} name='email' aria-label="E-mail" variant="outlined" size="small"/>
                <br />
                <FormLabel>Password</FormLabel>
                <TextField onChange={this.handleChange} name='password' aria-label="Password" variant="outlined" size="small"/>
                <br />
                <Button onClick={this.handleSubmit} aria-label="Sign In" variant="contained" color="secondary"  size="small">Sign In</Button>
                </FormControl>
            </Grid>
            </>
        )
    }
}

export default withStyles(styles)(SignIn)
