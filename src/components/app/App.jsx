import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import WordFormContainer from '../../container/WordFormContainer';
import WordsListContainer from '../../container/WordsListContainer';
import WordDetailContainer from '../../container/WordDetailContainer';
import WordUpdateContainer from '../../container/WordUpdateContainer';
import WordDeleteContainer from '../../container/WordDeleteContainer';
import styles from './App.css'

export default function App() {
  return (
    <>
      <Router>
        <nav className={styles.nav}>
          <li><Link to="/" className={styles.links}>Add Word</Link></li>
          <li><Link to="/words" className={styles.links}>Words List</Link></li>
        </nav>

        <Switch>
          <Route
            exact path="/"
            component={WordFormContainer}
          />
          <Route
            exact path="/words"
            component={WordsListContainer}
          />
          <Route
            exact path="/words/:id"
            component={WordDetailContainer}
          />
          <Route
            exact path="/words/update/:id"
            component={WordUpdateContainer}
          />
          <Route
            exact path="/words/delete/:id"
            component={WordDeleteContainer}
          />
        </Switch>
      </Router>
    </>
  )
}
