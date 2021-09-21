import Footer from '../Footer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavLink } from 'react-router-dom'
import React from 'react'

Enzyme.configure({adapter: new Adapter()})

describe('app footer', () => {
  it('displays a footer with three navlinks', () => {
    const footer = shallow(<Footer/>)
    expect(footer.contains(<NavLink to="/aboutus" className="footer-link">Terms and Conditions</NavLink>)).toEqual(true)
    expect(footer.contains(<NavLink to="/aboutus" className="footer-link">About Us</NavLink>)).toEqual(true)
    expect(footer.contains(<NavLink to="/aboutus" className="footer-link">Copyright@2021</NavLink>)).toEqual(true)
  })
})
