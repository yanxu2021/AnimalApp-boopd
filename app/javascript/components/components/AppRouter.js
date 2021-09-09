import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from './Header'

class AppRouter extends React.Component {
    render() {
        return(
            <Router>
                <Header/>
                <Switch>   

                </Switch>
            </Router>
        )
    }
}

export default AppRouter
