import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetNew from '../PetNew'
import {
    TextField,
    FormLabel,
    Button
  } from "@material-ui/core";
import { createShallow } from '@material-ui/core/test-utils'

Enzyme.configure({adapter: new Adapter()})

describe('petnew page', () => {
    let shallow

    beforeAll(() => {
      shallow = createShallow({ dive: true })
    })

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
