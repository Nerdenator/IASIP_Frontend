import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import {Home} from './components/Home.jsx';
import {About} from './components/About.jsx';
import {Characters} from './components/Characters.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/characters">Characters</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/characters" component={Characters}/>
        </div>
      </Router>
    )
  }
}
export default App;
