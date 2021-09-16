import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetShow from '../PetShow'

Enzyme.configure({adapter: new Adapter()})

describe('petshow page', () => {


    it("display the pet", () =>{
        const petShow = shallow(<PetShow />)
        expect((petShow.find("Button")).length).toEqual(0)

    })

    it("displays the home page", () =>{
        const showHome = shallow(<PetShow />).find("h1")
        expect(showHome.text()).toEqual("Every snoot deserves a boop.")
    })
})

