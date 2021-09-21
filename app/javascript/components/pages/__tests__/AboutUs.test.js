import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from '../AboutUs'
import {
    Button
  } from '@material-ui/core'
import FAQ from '../../components/FAQ'

Enzyme.configure({adapter: new Adapter()})

describe('About Us page', () => {
  it('contains the appropriate elements/tags', () => {
    const aboutUs = shallow(<AboutUs/>)
    expect(aboutUs.contains(<FAQ className="accordion"/>)).toEqual(true)
    let team = ['Kelen', 'Yan', 'Chris', 'Amanda']
    team.forEach((member) => {
      expect(aboutUs.contains(<h5>{member}</h5>)).toEqual(true)
    })
    expect(aboutUs.find(Button).length).toEqual(4)
    expect(aboutUs.contains(<h3>Contact us: team.kyac@gmail.com</h3>)).toEqual(true)
  })
})
