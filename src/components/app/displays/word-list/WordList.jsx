import React from 'react'
import WordItem from '../word-item/WordItem'
import PropTypes from 'prop-types'
import styles from './WordList.css'

const WordList = ({ wordsList }) => {
  return wordsList.map(word => (
    <div key={word.id} className={styles.wordItem}>
      <WordItem {...word} />
    </div>
  ))
}

WordList.propTypes = {
  wordsList: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    wordLanguage: PropTypes.string.isRequired,
    wordTranslation: PropTypes.string,
    wordDefinition: PropTypes.string.isRequired,
    exampleSentence: PropTypes.string
  }))
}

export default WordList
