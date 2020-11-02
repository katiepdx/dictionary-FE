import React from 'react'
import { render } from '@testing-library/react'
import WordDetails from './WordDetails'
import { MemoryRouter } from 'react-router-dom'

describe('<WordDetails/>', () => {
  it('should render the word details to the page', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <WordDetails
          id={5}
          word="WordDetailTest"
          wordLanguage="WordDetailTest"
          wordTranslation="WordDetailTest"
          wordDefinition="WordDetailTest"
          exampleSentence="WordDetailTest"
          notes="I learned a new word!"
        /></MemoryRouter>)

    expect(asFragment()).toMatchSnapshot()
  })
})
