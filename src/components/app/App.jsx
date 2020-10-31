import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import styles from './App.css'
import WordContainer from '../../container/WordContainer';
import WordsListContainer from '../../container/WordsListContainer';
import WordDetailContainer from '../../container/WordDetailContainer';

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
            component={WordContainer}
          />
          <Route
            exact path="/words"
            component={WordsListContainer}
          />
          <Route
            exact path="/words/:id"
            component={WordDetailContainer}
          />
        </Switch>
      </Router>
    </>
  )
}
