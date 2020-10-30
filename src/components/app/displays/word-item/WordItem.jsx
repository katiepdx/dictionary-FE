// one word 
import React from 'react'
import PropTypes from 'prop-types'

const WordItem = ({
  word,
  wordLanguage,
  wordTranslation,
  wordDefinition,
  exampleSentence,
  notes }) => {
  return (
    <div>
      <h1>Word Item Page</h1>
      <p>Word: {word}</p>
      <p>Language: {wordLanguage}</p>
      <p>Translation: {wordTranslation ? wordTranslation : 'n/a'}</p>
      <p>Definition: {wordDefinition}</p>
      <p>Example Sentence: {exampleSentence}</p>
      <p>Notes: {notes ? notes : 'n/a'}</p>
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
