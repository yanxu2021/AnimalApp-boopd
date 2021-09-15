import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
          <NavLink to="/aboutus" className="footer-link">Terms and Conditions</NavLink>
          <br/>          
          <NavLink to="/aboutus" className="footer-link">About Us</NavLink>
          <br/>
          <NavLink to="/aboutus" className="footer-link">Copyright@2021</NavLink>
          <br/>
      </footer>
    )
  }
}

export default Footer