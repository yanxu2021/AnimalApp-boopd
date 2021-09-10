import React from 'react'
import Nav from './Nav.js'

  class Header extends React.Component {
      render(){
          return(
              <div>
                  <h1>Say Hi from Header</h1>
                  <Nav/>
              </div>
          )
      }
  }
  export default Header