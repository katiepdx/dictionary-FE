import React from 'react'
import { render } from '@testing-library/react'
import WordList from './WordList'
import { MemoryRouter } from 'react-router-dom'

const list = [
  {
    word: "Word 1",
    wordLanguage: "English",
    wordTranslation: "word 1 translation",
    wordDefinition: "word 1 definition",
    exampleSentence: "this is a cool word",
    notes: "I learned a new word!",
  }, {
    word: "Word 2",
    wordLanguage: "English",
    wordTranslation: "word 2 translation",
    wordDefinition: "word 2 definition",
    exampleSentence: "this is a cool word",
    notes: "I learned a new word!",
  }
]

describe('<WordList/>', () => {
  it('should render a list of words to the page', () => {
    const { asFragment } = render(<MemoryRouter><WordList wordsList={list} /></MemoryRouter>)

    expect(asFragment()).toMatchSnapshot()
  })
})
