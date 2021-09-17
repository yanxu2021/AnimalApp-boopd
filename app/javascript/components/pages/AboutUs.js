import React from "react"
import { Button } from "@material-ui/core"
import about from '../components/images/about.png'
import kelen from '../components/images/kelen.jpg'
import yan from '../components/images/yan.jpeg'
import amanda from '../components/images/amanda'
import chris from '../components/images/chris'

import FAQ from '../components/FAQ'

class AboutUs extends React.Component {
  render() {
    return(
      <div className="page-body">
      <br/>
      <div className="p-body">
      <h3>WHO WE ARE</h3>
         <div className="container">
          <div className="blurb">
            <img src={kelen} alt="about"/>
            <h5>Kelen</h5>
            <p>Tech Lead</p>
            <Button>GitHub</Button>
          </div>
          <div className="blurb">
            <img src={yan} alt="about"/>
            <h5>Yan</h5>
            <p>Project Manager</p>
            <Button>GitHub</Button>
          </div>
          <div className="blurb">
            <img src={amanda} alt="about"/>
            <h5>Amanda</h5>
            <p>Design Lead</p>
            <Button className="button">GitHub</Button>
          </div>
          <div className="blurb">
            <img src={chris} alt="about"/>
            <h5>Chris</h5>
            <p>Product Manager</p>
            <Button>GitHub</Button>
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
      <FAQ className="accordion"/>
      <br/>
      <h3>Contact us: team.kyac@gmail.com</h3>
      </div>
      </div>
   </div>
    )
  }
}
export default AboutUs