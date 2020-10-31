import React, { Component } from 'react'
import { getAllWords } from '../service/api-fetch'
import WordList from '../components/app/displays/word-list/WordList'
import styles from './WordsListContainer.css'

export default class WordsListContainer extends Component {
  state = {
    wordsList: []
  }

  async componentDidMount() {
    const wordsList = await getAllWords()

    this.setState({ wordsList })
  }

  render() {
    const { wordsList } = this.state
    return (
      <div className={styles.wordsList}>
        {wordsList.length >= 1
          ?
          <WordList wordsList={wordsList} />
          :
          <h1>Oops! Please add a word to your list first....</h1>}
      </div>
    )
  }
}
