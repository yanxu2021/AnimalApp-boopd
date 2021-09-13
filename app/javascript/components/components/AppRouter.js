import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from './Header'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import PetNew from '../pages/PetNew'
import NotFound from '../pages/NotFound'

class AppRouter extends React.Component {
    render() {
        console.log(this.props.loggedIn)
        return(
            <Router>
                <Header/>
                <Switch>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/signin' component={SignIn}/>
                  {this.props.loggedIn && <Route path='/petnew' component={PetNew}/> }
                  <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
