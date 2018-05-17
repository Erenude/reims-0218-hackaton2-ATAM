import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters'
import Logo from './components/Carousel'
import Slogan from './components/Slogan';
import RandomSentence from './components/RandomSentence';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Logo />
        <Slogan />
        <Characters />
        <RandomSentence />
      </div>
    );
  }
}

export default App;
