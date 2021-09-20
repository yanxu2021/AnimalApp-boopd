import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetNew from '../PetNew'
import {
    TextField,
    FormLabel,
    Button
  } from "@material-ui/core";

Enzyme.configure({adapter: new Adapter()})

describe('petnew page', () => {
    let testuser = {id: 1}
    it("display a form", () =>{
        const petNew = shallow(<PetNew current_user={testuser} />)
        const formLabel = petNew.find(FormLabel)
        expect(formLabel.length).toEqual(9)
        const button = petNew.find(Button)
        expect(button.length).toEqual(3)
        const textField = petNew.find(TextField)
        expect(textField.length).toEqual(8)
    })
})