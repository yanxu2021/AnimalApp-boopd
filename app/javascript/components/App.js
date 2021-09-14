import React from "react"
import PropTypes from "prop-types"
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer.js"

class App extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <AppRouter loggedIn={this.props.logged_in}/>
      </React.Fragment>
    );
  }
}

export default App
