import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import WordsListContainer from './WordsListContainer'
import { getAllWords } from '../service/api-fetch'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../service/api-fetch')

describe('<WordsListContainer/>', () => {
  it('tests that a word list renders to the page', async () => {
    getAllWords.mockResolvedValue([{
      "id": "2",
      "word": "Word 2",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 2",
      "wordDefinition": "Word definition 2",
      "exampleSentence": "This is word 2！",
      "notes": "I learned a new word!"
    },
    {
      "id": "3",
      "word": "Word 3",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 3",
      "wordDefinition": "Word definition 3",
      "exampleSentence": "This is word 3！",
      "notes": "I learned a new word!"
    },
    {
      "id": "4",
      "word": "Word 4",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 4",
      "wordDefinition": "Word definition 4",
      "exampleSentence": "This is word 4！",
      "notes": "I learned a new word!"
    },
    {
      "id": "5",
      "word": "Word 5",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 5",
      "wordDefinition": "Word definition 5",
      "exampleSentence": "This is word 5！",
      "notes": "I learned a new word!"
    },
    {
      "id": "6",
      "word": "Word 6",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 6",
      "wordDefinition": "Word definition 6",
      "exampleSentence": "This is word 6！",
      "notes": "I learned a new word!"
    },
    {
      "id": "7",
      "word": "Word 7",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 7",
      "wordDefinition": "Word definition 7",
      "exampleSentence": "This is word 7！",
      "notes": "I learned a new word!"
    },
    {
      "id": "8",
      "word": "Word 8",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 8",
      "wordDefinition": "Word definition 8",
      "exampleSentence": "This is word 8！",
      "notes": "I learned a new word!"
    },
    {
      "id": "9",
      "word": "Word 9",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 9",
      "wordDefinition": "Word definition 9",
      "exampleSentence": "This is word 9！",
      "notes": "I learned a new word!"
    },
    {
      "id": "10",
      "word": "Word 10",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 10",
      "wordDefinition": "Word definition 10",
      "exampleSentence": "This is word 10！",
      "notes": "I learned a new word!"
    },
    {
      "id": "11",
      "word": "Word 11",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 11",
      "wordDefinition": "Word definition 11",
      "exampleSentence": "This is word 11！",
      "notes": "I learned a new word!"
    },
    {
      "id": "12",
      "word": "Word 12",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 12",
      "wordDefinition": "Word definition 12",
      "exampleSentence": "This is word 12！",
      "notes": "I learned a new word!"
    },
    {
      "id": "13",
      "word": "Word 13",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 13",
      "wordDefinition": "Word definition 13",
      "exampleSentence": "This is word 13！",
      "notes": "I learned a new word!"
    },
    {
      "id": "14",
      "word": "Word 14",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 14",
      "wordDefinition": "Word definition 14",
      "exampleSentence": "This is word 14！",
      "notes": "I learned a new word!"
    },
    {
      "id": "15",
      "word": "Word 15",
      "wordLanguage": "English",
      "wordTranslation": "Word translation 15",
      "wordDefinition": "Word definition 15",
      "exampleSentence": "This is word 15！",
      "notes": "I learned a new word!"
    }])

    render(<MemoryRouter><WordsListContainer /></MemoryRouter>)

    const wordsList = await screen.findByTestId('word-list')

    expect(wordsList).not.toBeEmptyDOMElement()
  })
})
