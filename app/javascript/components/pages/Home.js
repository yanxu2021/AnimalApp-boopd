import React from "react"
import logo from '../components/images/logo.png';

class Home extends React.Component {
  render() {
    return(
        <div className="container">
        <img src={logo} alt="logo" />
        <h1>Every snoot deserves a boop.</h1>
    <h3>A nation-wide resource for helping pets in need of assistance with medical bills, supplies, fostering, adoption and compassionate re-homing.</h3>
    </div>
    )
  }
}
export default Home