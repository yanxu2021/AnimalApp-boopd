import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
          <NavLink to="/aboutus">TERMS AND CONDITIONS</NavLink>
          <br/>          
          <NavLink to="/aboutus">ABOUT US</NavLink>
          <br/>
          <NavLink to="/aboutus">COPYRIGHT@2021</NavLink>
          <br/>
      </footer>
    )
  }
}

export default Footer