import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetEdit from '../PetEdit'
import {
    TextField,
    FormLabel,
    Button
  } from "@material-ui/core";


Enzyme.configure({adapter: new Adapter()})

console.log(fetch)
const pet = {
    id: 1,
    name: 'Tekiro',
    species: 'cat',
    sex: 'female',
    breed: 'domestic mix',
    vaccinations: true,
    medical: ['none as of yet'],
    behavior: 'foodie',
    fixed: true,
    available: true,
    age: '0',
    description: 'cutie',
    city: 'Poway',
    state: 'CA',
    housetrained: true,
    declawed: true,
    lived_with_children: true,
    lived_with_animals: true,
}
// global.fetch = jest.fn(() => {
//     Promise.resolve({
//         json: () => {Promise.resolve({pet})}
//     })
// })
// beforeEach(() => {fetch.mockClear()})

const fetch = jest.fn()

const match = {
    params : {
        id: 1
    }
}

describe('petedit page', () => {
    
    it("display a form with the exist information", async () =>{
        fetch.mockImplementationOnce(() => {
            Promise.resolve({
                json: () => {Promise.resolve({pet})}
            })
        })
        const petEdit = shallow(<PetEdit match={match} />)
        // fetch.mockImplementationOnce()
        console.log(petEdit.debug())
        const formLabel = petEdit.find(FormLabel)
        expect(formLabel.length).toEqual(9)
        const button = petEdit.find(Button)
        expect(button.length).toEqual(3)
        const textField = petEdit.find(TextField)
        expect(textField.length).toEqual(8)
        // expect(petEdit.contains(<Typography>Name: Tekiro</Typography>)).toEqual(true)
    })
})