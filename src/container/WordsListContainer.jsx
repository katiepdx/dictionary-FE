import React, { Component } from 'react'
import { getAllWords } from '../service/api-fetch'
import WordList from '../components/app/displays/word-list/WordList'
import styles from './Container.css'

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
      <div>
        <h1>My Word List</h1>
        <section>
          {wordsList.length >= 1
            ?
            <div className={styles.wordsList} data-testid="word-list">
              <WordList wordsList={wordsList} />
            </div>
            :
            <h1>Oops! Please add a word to your list first....</h1>}
        </section>
      </div>
    )
  }
}
