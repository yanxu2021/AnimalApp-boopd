import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetNew from '../PetNew'
import {
    Typography,
    Checkbox,
    ExpansionPanelActions,
    TextField
  } from '@material-ui/core'

Enzyme.configure({adapter: new Adapter()})

describe('petnew page', () => {
    // let pet = {
    //     name:"Penguin",
    //     age:"5",
    //     sex:"Female",
    //     species:"Cat",
    //     breed:"Domestic Short Hair/Mix",
    //     behavior:"Petite little lady",
    //     city:"Elk Grove",
    //     state:"CA",
    //     available:"Available",
    //     description:"5 Years old and 7 pound cat looking for her forever home.",
    //     housetrained:true,
    //     vaccinations:true,
    //     livedWithAnimals:true,
    //     fixed:false,
    //     declawed:false,
    //     livedWithChildren:true,
    //     medical:[]
    // }
    let fakeuser = {id: 1}
    it("display a form", () =>{
        const petNew = shallow(<PetNew />)
        const formLabel = petNew.find("FormLabel")
        expect(formLabel.length).toEqual(0)
        const button = petNew.find("Button")
        expect(button.length).toEqual(3)
        const textField = petNew.find("TextField")
        expect(textField.length).toEqual(6)
    })
})