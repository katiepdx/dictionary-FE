import React from 'react'
import PropTypes from 'prop-types'
import styles from './WordItem.css'

const WordItem = ({ word }) => {
  return (
    <div className={styles.wordItem}>
      <h4>Word: {word}</h4>
    </div>
  )
}

WordItem.propTypes = {
  word: PropTypes.string.isRequired
}

export default WordItem
