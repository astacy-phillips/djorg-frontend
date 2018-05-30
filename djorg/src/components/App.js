import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NoteList from './NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NoteList />
      </div>
    );
  }
}

export default App;