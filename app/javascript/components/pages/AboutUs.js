import React from "react"
import about from '../components/images/about.png'

import Accordion from '../components/Accordion'

class AboutUs extends React.Component {
  render() {
    return(
      <div className="page-body">
      <br/>
      <div className="p-body">
      <h3>WHO WE ARE</h3>
      <p>something here about who we are...........</p>
        <div className="container">
          <div className="blurb">
            <img src={about} alt="about"/>
            <h5>Kelen</h5>
            <p>some stuff about person</p>
          </div>
          <div className="blurb">
            <img src={about} alt="about"/>
            <h5>Yan</h5>
            <p>some stuff about person</p>
          </div>
          <div className="blurb">
            <img src={about} alt="about"/>
            <h5>Amanda</h5>
            <p>some stuff about person</p>
          </div>
          <div className="blurb">
            <img src={about} alt="about"/>
            <h5>Chris</h5>
            <p>some stuff about person</p>
          </div>
        </div>
      <br/>
      <div className="section">
      <h3>WHAT WE DO</h3>
      <p>We at KYAC Inc. have seen an increase of de-homed animals and struggling families during the pandemic. It is our vision to be part of the solution. With our pet-adoption-resource boopd, we connect struggling animals with benevolent humans who wish to care for them in these trying times. We present to you a nation-wide resource to find the animal that belongs in your home, or find the home that is worthy of your beloved pet that you can no longer care for.</p>
      <br/>
      <h3>F.A.Q</h3>
      <p>Answers to frequently asked questions can be found below, if you can't find the information you are looking for here please feel free to contact the team via email.</p>
      <br/>
      <Accordion className="accordion"/>
      <br/>
      <h3>Contact us: team.kyac@gmail.com</h3>
      </div>
      </div>
   </div>
    )
  }
}
export default AboutUs