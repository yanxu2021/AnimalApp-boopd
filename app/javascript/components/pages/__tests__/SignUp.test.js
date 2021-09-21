import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SignUp from '../SignUp'
import {
  TextField,
  Radio,
  FormLabel,
  Button,
  FormControlLabel,
  RadioGroup
} from '@material-ui/core'
import { createShallow } from '@material-ui/core/test-utils'

Enzyme.configure({ adapter: new Adapter() })

describe('sign-up page', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow({ dive: true })
  })


  it('has appropriate form labels', () => {
    const form = shallow(<SignUp/>)
    const labels = ['First Name', 'Last Name', 'User Name', 'State', 'Role', 'E-mail', 'Password', 'Confirm Password']
    labels.forEach((attr) => {
      expect(form.contains(<FormLabel>{attr}</FormLabel>)).toEqual(true)
    })
  })
  it('has proper input textfields', () => {
    const form = shallow(<SignUp/>)
    const inputs = form.find(TextField)
    const inputNames = ['firstName', 'lastName', 'username', 'state', 'email', 'password', 'passwordConfirmation']
    inputs.forEach((input, index) => {
      expect(input.prop('name')).toBe(inputNames[index])
    })
  })
  it('has radiogroup with correct names', () => {
    const form = shallow(<SignUp/>)
    const radioGroup = form.find(RadioGroup)
    expect(radioGroup.contains(<FormControlLabel value="Looking For Pet" control={<Radio />} label="Looking For Pet" aria-label="Looking For Pet"/>)).toEqual(true)
    expect(radioGroup.contains(<FormControlLabel value="Looking For Home" control={<Radio />} label="Looking For Home" aria-label="Looking For Home"/>)).toEqual(true)
  })
})
