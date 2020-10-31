import React from 'react'
import WordItem from '../word-item/WordItem'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const WordList = ({ wordsList }) => {
  return wordsList.map(word => (
    <div key={word.id}>
      <Router>
        <Link to={`/words/${word.id}`}>
          <WordItem {...word} />
        </Link>
      </Router>
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
