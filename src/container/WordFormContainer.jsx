import React, { Component } from 'react'
import WordForm from '../components/app/controls/WordForm'
import { createWord } from '../service/api-fetch';

export default class WordFormContainer extends Component {
  state = {
    word: '',
    wordLanguage: '',
    wordTranslation: '',
    wordDefinition: '',
    exampleSentence: '',
    notes: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = async () => {
    // POST req
    const apiRes = await createWord({
      word: this.state.word,
      wordLanguage: this.state.wordLanguage,
      wordTranslation: this.state.wordTranslation,
      wordDefinition: this.state.wordDefinition,
      exampleSentence: this.state.exampleSentence,
      notes: this.state.notes
    })

    // reset state - clear form
    this.setState({
      word: '',
      wordLanguage: '',
      wordTranslation: '',
      wordDefinition: '',
      exampleSentence: '',
      notes: ''
    })
  }

  render() {
    const {
      word,
      wordLanguage,
      wordTranslation,
      wordDefinition,
      exampleSentence,
      notes,
    } = this.state

    return (
      <div>
        <h1>Word Container</h1>
        <WordForm
          word={word}
          wordLanguage={wordLanguage}
          wordTranslation={wordTranslation}
          wordDefinition={wordDefinition}
          exampleSentence={exampleSentence}
          notes={notes}
          onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}
