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
import Index from '../pages/Index'
import NotFound from '../pages/NotFound'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import PetShow from '../pages/PetShow'

class AppRouter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          pets: []
        }
      }

      componentDidMount(){
        this.readPet()
      }

      readPet = () => {
        fetch("/pets")
        .then(response => response.json())
        .then(payload => {this.setState({pets: payload})
        console.log(payload)})
        .catch(errors => console.log("index errors:", errors))
      }

    render() {
        console.log(this.props.loggedIn)
        const { pets } = this.state
        return(
            <Router>
                <Header {...this.props} />
                <div style = {{paddingTop:"90px", paddingBottom: "90px"}}>
                <Switch>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/signin' component={SignIn}/>
                  {this.props.loggedIn && <Route path='/petnew' component={PetNew}/> }
                  <Route path='/index' render={(props)=> {
                      return <Index {...this.props} pets={this.state.pets} history={props.history}/>
                  }}/>
                  <Route path='/petshow/:id' render={(props) => {
                    return <PetShow history={props.history} loggedIn={this.props.loggedIn} pets={pets} match={props.match} />
                  }}/>
                  <Route path='/aboutus' component={AboutUs}/>
                  <Route path='/' component={Home}/>
                  <Route component={NotFound}/>
                </Switch>
                </div>
                <Footer/>
            </Router>
        )
    }
}


export default AppRouter
