import React from 'react'
import { render } from '@testing-library/react'
import WordItem from './WordItem'

describe('<WordItem/>', () => {
  it('should render a word item to the page', () => {
    const { asFragment } = render(<WordItem
      word="Word"
      wordLanguage="English"
      wordTranslation="word translation"
      wordDefinition="word definition"
      exampleSentence="this is a cool word"
      notes="I learned a new word!"
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
