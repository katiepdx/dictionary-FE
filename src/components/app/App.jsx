import React from 'react';
import { WordList } from './displays/word-list/WordList';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css'
import WordContainer from '../../container/WordContainer';

export default function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <Router>
        <nav>
          <li><Link to="/">Add Word</Link></li>
          <li><Link to="/words">Words List</Link></li>
        </nav>

        <Switch>
          <Route
            exact path="/"
            component={WordContainer}
          />
          <Route
            exact path="/words"
            component={WordList}
          />
        </Switch>
      </Router>
    </>
  )
}
