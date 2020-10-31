import React from 'react'
import PropTypes from 'prop-types'
import styles from './WordItem.css'

const WordItem = ({
  word,
  wordLanguage,
  wordTranslation,
  wordDefinition,
  exampleSentence,
  notes }) => {
  return (
    <div className={styles.wordItem}>
      <h4>Word: {word}</h4>

      <p className={styles.label}>Language</p>
      <p> {wordLanguage}</p>

      <p className={styles.label}>Translation</p>
      <p> {wordTranslation ? wordTranslation : 'n/a'}</p>

      <p className={styles.label}>Definition</p>
      <p> {wordDefinition}</p>

      <p className={styles.label}>Example Sentence</p>
      <p> {exampleSentence}</p>

      <p className={styles.label}>Notes</p>
      <p> {notes ? notes : 'n/a'}</p>
    </div>
  )
}

WordItem.propTypes = {
  word: PropTypes.string.isRequired,
  wordLanguage: PropTypes.string.isRequired,
  wordTranslation: PropTypes.string,
  wordDefinition: PropTypes.string.isRequired,
  exampleSentence: PropTypes.string.isRequired,
  notes: PropTypes.string
}

export default WordItem
