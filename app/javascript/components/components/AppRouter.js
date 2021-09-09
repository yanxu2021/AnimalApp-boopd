import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from './Header'
import SignUp from '../pages/SignUp'

class AppRouter extends React.Component {
    render() {
        return(
            <Router>
                <Header/>
                <Switch>
                  <Route path='/signup' component={SignUp}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
