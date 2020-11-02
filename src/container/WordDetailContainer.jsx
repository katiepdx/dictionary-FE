import React, { Component } from 'react'
import WordDetails from '../components/app/displays/word-details/WordDetails'
import { getWordById } from '../service/api-fetch'

export default class WordDetailContainer extends Component {
  state = {
    id: null,
    word: '',
    wordLanguage: '',
    wordTranslation: '',
    wordDefinition: '',
    exampleSentence: '',
    notes: ''
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const response = await getWordById(id)
    console.log(id)
    this.setState({
      id: id,
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
      id,
      word,
      wordLanguage,
      wordTranslation,
      wordDefinition,
      exampleSentence,
      notes } = this.state

    return (
      <div>
        <WordDetails
          id={id}
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
