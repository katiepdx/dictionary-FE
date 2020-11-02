import React from 'react'
import PropTypes from 'prop-types'
import styles from './WordDetails.css'
import { Link } from 'react-router-dom'

const WordDetails = ({
  id,
  word,
  wordLanguage,
  wordTranslation,
  wordDefinition,
  exampleSentence,
  notes }) => {
  return (
    <div>
      <h1>{word}</h1>
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

      <Link to={`/words/update/${id}`}><button>Update</button></Link>
      <Link to={`/words/delete/${id}`}><button>Delete</button></Link>
    </div>
  )
}

WordDetails.propTypes = {
  id: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  wordLanguage: PropTypes.string.isRequired,
  wordTranslation: PropTypes.string,
  wordDefinition: PropTypes.string.isRequired,
  exampleSentence: PropTypes.string.isRequired,
  notes: PropTypes.string
}

export default WordDetails
