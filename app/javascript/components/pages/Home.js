import React from "react"
import Boopd from "../components/Boopd"


class Home extends React.Component {
  render() {
    return(
      <>
    <div className="homeContainer" >
        <Boopd/>
        <h1>Every snoot deserves a boop.</h1>
        <h3>A nation-wide resource for helping pets in need of assistance with medical bills, supplies, fostering, adoption and compassionate re-homing.</h3>
    </div>
    <div className="homeContainer-mobile" >
        <Boopd/>
        <h1>Every snoot deserves a boop.</h1>
        <h3>A nation-wide resource for helping pets in need of assistance with medical bills, supplies, fostering, adoption and compassionate re-homing.</h3>
</div>
    </>
    )
  }
}
export default Home