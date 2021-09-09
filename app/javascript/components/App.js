import React from "react"
import PropTypes from "prop-types"
import AppRouter from "./components/AppRouter";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <AppRouter/>
      </React.Fragment>
    );
  }
}

export default App
