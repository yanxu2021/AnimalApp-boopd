import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetShow from '../PetShow'
import {
    Typography,
    Checkbox
  } from '@material-ui/core'

Enzyme.configure({adapter: new Adapter()})

describe('petshow page', () => {
    let pet = {
        id: 1,
        name: 'Phoebe',
        species: 'Dog',
        sex: 'female',
        breed: 'golden retriever labradoodle',
        vaccinations: true,
        medical: ['none as of yet'],
        behavior: 'chill',
        fixed: true,
        available: true,
        age: '0',
        description: 'puppy dog',
        city: 'Poway',
        state: 'CA',
        housetrained: true,
        declawed: true,
        lived_with_children: true,
        lived_with_animals: true
    }
    let match = {
        params: {
            id: 1
        }
    }
    let petFalse = {
        id: 1,
        name: 'Phoebe',
        species: 'Dog',
        sex: 'female',
        breed: 'golden retriever labradoodle',
        vaccinations: false,
        medical: ['none as of yet'],
        behavior: 'chill',
        fixed: false,
        available: false,
        age: '0',
        description: 'puppy dog',
        city: 'Poway',
        state: 'CA',
        housetrained: false,
        declawed: false,
        lived_with_children: false,
        lived_with_animals: false
    }

    it("display the pet", () =>{
        const petShow = shallow(<PetShow pets={[pet]} match={match} currentUser={{id: 1}} />)
        expect(petShow.contains(<Typography>Name: Phoebe</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Age: 0</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Sex: female</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Species: Dog</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Behavior/Personality: chill</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>City: Poway</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>State: CA</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Breed: golden retriever labradoodle</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Description: </Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>puppy dog</Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>Medical History </Typography>)).toEqual(true)
        expect(petShow.contains(<Typography>none as of yet</Typography>)).toEqual(true)
        petShow.find(Checkbox).forEach(node => {
        expect(node.props().checked).toEqual(true)
        })
        const petUnchecked = shallow(<PetShow pets={[petFalse]} match={match} currentUser={{id: 1}} />)
        petUnchecked.find(Checkbox).forEach(node => {
        expect(node.props().checked).toEqual(false)
        })
    })
})

