import React from 'react'
import PropTypes from 'prop-types'
import styles from './WordForm.css'

const WordForm = ({
  word,
  wordLanguage,
  wordTranslation,
  wordDefinition,
  exampleSentence,
  notes,
  onChange }) => {
  return (
    <div className={styles.formPage}>
      <section className={styles.wordForm}>
        <h2>Add a word!</h2>
        <label htmlFor="word">Word</label>
        <input
          id="word"
          type="text"
          name="word"
          value={word}
          onChange={onChange}
        />

        <label htmlFor="wordLanguage">word language</label>
        <input
          id="wordLanguage"
          type="text"
          name="wordLanguage"
          value={wordLanguage}
          onChange={onChange}
        />

        <label htmlFor="wordTranslation">word translation</label>
        <input
          id="wordTranslation"
          type="text"
          name="wordTranslation"
          value={wordTranslation}
          onChange={onChange}
        />

        <label htmlFor="wordDefinition">word definition</label>
        <input
          id="wordDefinition"
          type="text"
          name="wordDefinition"
          value={wordDefinition}
          onChange={onChange}
        />

        <label htmlFor="exampleSentence">example sentence</label>
        <input
          id="exampleSentence"
          type="text"
          name="exampleSentence"
          value={exampleSentence}
          onChange={onChange}
        />

        <label htmlFor="notes">notes</label>
        <textarea
          id="notes"
          type="text"
          name="notes"
          value={notes}
          onChange={onChange}
        />
      </section>
    </div>
  )
}

WordForm.propTypes = {
  word: PropTypes.string.isRequired,
  wordLanguage: PropTypes.string.isRequired,
  wordTranslation: PropTypes.string,
  wordDefinition: PropTypes.string.isRequired,
  exampleSentence: PropTypes.string.isRequired,
  notes: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default WordForm
