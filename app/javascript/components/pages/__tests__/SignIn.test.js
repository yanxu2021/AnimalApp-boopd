import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SignIn from '../SignIn'
import {
  TextField,
  Button,
  FormLabel
} from '@material-ui/core'
import { createShallow } from '@material-ui/core/test-utils'

Enzyme.configure({ adapter: new Adapter() })

describe('sign-in page', () => {
  let shallow
  beforeAll(() => {
    shallow = createShallow({ dive: true })
  })

  it('displays a sign-in form with two textfields and a button', () => {
    const signIn = shallow(<SignIn />)
    expect(signIn.contains(<FormLabel>E-mail</FormLabel>)).toEqual(true)
    expect(signIn.contains(<FormLabel>Password</FormLabel>)).toEqual(true)
    const inputs = signIn.find(TextField)
    expect(inputs.length).toEqual(2)
    const button = signIn.find(Button)
    expect(button.length).toEqual(1)
  })
})
