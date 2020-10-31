import React from 'react'
import { render } from '@testing-library/react'
import WordItem from './WordItem'

describe('<WordItem/>', () => {
  it('should render a word item to the page', () => {
    const { asFragment } = render(<WordItem word="WordItemTest" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
