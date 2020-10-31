import React, { Component } from 'react'
import WordDetails from '../components/app/displays/word-details/WordDetails'

export default class WordDetailContainer extends Component {
  state = {
    word: '',
    wordLanguage: '',
    wordTranslation: '',
    wordDefinition: '',
    exampleSentence: '',
    notes: ''
  }

  async componentDidMount() {
    const id = match.params.id

    const response = await getWordById(id)

    this.setState({
      word: response.word,
      wordLanguage: response.wordLanguage,
      wordTranslation: response.wordTranslation,
      wordDefinition: response.wordDefinition,
      exampleSentence: response.exampleSentence,
      notes: response.notes
    })
  }

  render() {
    const {
      word,
      wordLanguage,
      wordTranslation,
      wordDefinition,
      exampleSentence,
      notes } = this.state

    return (
      <div>
        <WordDetails
          word={word}
          wordLanguage={wordLanguage}
          wordTranslation={wordTranslation}
          wordDefinition={wordDefinition}
          exampleSentence={exampleSentence}
          notes={notes} />
      </div>
    )
  }
}
