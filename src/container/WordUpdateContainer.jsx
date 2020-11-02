import React, { Component } from 'react'
import { getWordById, updateWordById } from '../service/api-fetch'
import WordForm from '../components/app/controls/WordForm'
import styles from './Container.css'

export default class WordUpdateContainer extends Component {
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

    this.setState({
      id: response.id,
      word: response.word,
      wordLanguage: response.wordLanguage,
      wordTranslation: response.wordTranslation,
      wordDefinition: response.wordDefinition,
      exampleSentence: response.exampleSentence,
      notes: response.notes
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = async () => {
    await updateWordById(this.state.id, {
      word: this.state.word,
      wordLanguage: this.state.wordLanguage,
      wordTranslation: this.state.wordTranslation,
      wordDefinition: this.state.wordDefinition,
      exampleSentence: this.state.exampleSentence,
      notes: this.state.notes
    })

    alert('Update complete!')
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
      <div className={styles.updateContainer}>
        <WordForm
          word={word}
          wordLanguage={wordLanguage}
          wordTranslation={wordTranslation}
          wordDefinition={wordDefinition}
          exampleSentence={exampleSentence}
          notes={notes}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick} >Update word</button>
      </div>
    )
  }
}
