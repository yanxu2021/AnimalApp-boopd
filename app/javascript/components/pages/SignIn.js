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
    }
    render(){

        const {classes} = this.props
        return(
            <>
            <Grid className={classes.root}>
                <FormControl>
                <FormLabel>E-mail</FormLabel>
                <TextField aria-label="E-mail" variant="outlined" size="small"/>
                <br />
                <FormLabel>Password</FormLabel>
                <TextField aria-label="Password" variant="outlined" size="small"/>
                <br />
                <Button aria-label="Sign In" variant="contained" color="secondary"  size="small">Sign In</Button>
                </FormControl>
            </Grid>
            </>
        )
    }
}

export default withStyles(styles)(SignIn)