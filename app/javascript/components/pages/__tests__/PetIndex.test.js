import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IndexCard from '../IndexCard'
import {
    Typography,
    Button
  } from '@material-ui/core'

Enzyme.configure({adapter: new Adapter()})

describe('pet index page', () => {
    let fakePet = {
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
        age: '2',
        description: 'puppy dog',
        city: 'Poway',
        state: 'CA',
        housetrained: true,
        declawed: true,
        lived_with_children: true,
        lived_with_animals: true
    }
it("display an index of pets", () =>{
    const indexCard = shallow(<IndexCard pets={[fakePet]}/>)
    expect(indexCard.contains(<Typography gutterBottom variant="h5" component="h2">Phoebe, 2, Dog</Typography>)).toEqual(true)
    expect(indexCard.contains(<Typography variant="body2" color="textSecondary" component="p">chill</Typography>)).toEqual(true)
    // expect(indexCard.find(<Button size="small" color="primary">My Story</Button>)).toEqual(true)
    const storyButton = indexCard.find(Button)
    expect(storyButton.length).toEqual (1)

    })
})
