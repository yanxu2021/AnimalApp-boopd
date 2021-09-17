import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IndexCard from '../IndexCard'
import {
    Typography,
    Checkbox
  } from '@material-ui/core'

Enzyme.configure({adapter: new Adapter()})

describe('pet index page', () => {

it("display an index of pets", () =>{
    const indexCard = shallow(<IndexCard pets={[pets]} match={match}/>)
    })
})