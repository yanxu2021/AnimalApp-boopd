import React from "react"
import PropTypes from "prop-types"
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer.js"

class App extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <AppRouter/>
      </React.Fragment>
    );
  }
}

export default App
