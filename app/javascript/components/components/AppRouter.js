import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import PetNew from '../pages/PetNew'
import NotFound from '../pages/NotFound'
import AboutUs from '../pages/AboutUs'

class AppRouter extends React.Component {
    render() {
        console.log(this.props.loggedIn)
        return(
            <Router>
                <Header {...this.props} />
                <Switch>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/signin' component={SignIn}/>
                  {this.props.loggedIn && <Route path='/petnew' component={PetNew}/> }
                  <Route path='/aboutus' component={AboutUs}/>
                  <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default AppRouter
