import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCard from './components/FlashCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteNumber: 70 }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
        <FlashCard front="hot" back="not cold"/>
        <FlashCard front="tall" back="not short"/>
        <FlashCard front="big" back="not small"/>

      </div>
    );
  }
}

export default App;
