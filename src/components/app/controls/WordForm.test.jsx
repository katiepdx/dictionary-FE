import React from 'react'
import { render } from '@testing-library/react'
import WordForm from './WordForm'

describe('<WordForm/>', () => {
  it('should render add a word form to the page', () => {
    const { asFragment } = render(
      <WordForm
        word="word WordForm test"
        wordLanguage="wordLanguage WordForm test"
        wordTranslation="wordTranslation WordForm test"
        wordDefinition="wordDefinition WordForm test"
        exampleSentence="exampleSentence WordForm test"
        notes="notes I learned a new word!"
        onChange={() => { }}
      />)

    expect(asFragment()).toMatchSnapshot()
  })
})
