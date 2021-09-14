import React from 'react'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import PetNew from '../PetNew'


describe('petnew page', () => {
  const component = (
    <Router history={createMemoryHistory()}>
      <PetNew/>
    </Router>
  )
  it('has a div for the whole form', async () => {
    render(component)
    const form = await screen.findAllByTestId('newForm')
    expect(form.length).toEqual(1)
  })
})

