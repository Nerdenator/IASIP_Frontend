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
import {MainMenu} from './components/MainMenu';
class App extends Component {
  render() {
    return (
        <div>
        <MainMenu/>
        </div>
    )
  }
}
export default App;
