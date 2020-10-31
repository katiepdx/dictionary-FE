import React from 'react'
import { render } from '@testing-library/react'
import WordDetails from './WordDetails'

describe('<WordDetails/>', () => {
  it('should render the word details to the page', () => {
    const { asFragment } = render(<WordDetails
      word="WordDetailTest"
      wordLanguage="WordDetailTest"
      wordTranslation="WordDetailTest"
      wordDefinition="WordDetailTest"
      exampleSentence="WordDetailTest"
      notes="I learned a new word!"
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
