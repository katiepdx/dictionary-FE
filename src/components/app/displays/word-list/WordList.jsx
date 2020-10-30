import React from 'react'
import WordItem from '../word-item/WordItem'
import PropTypes from 'prop-types'

const WordList = ({ wordsList }) => {
  return wordsList.map(word => (
    <div key={word.id}>
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
