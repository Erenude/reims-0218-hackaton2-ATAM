import React, { Component } from 'react';
import './App.css';
import CharactersContainer from './components/CharactersContainer'
import Slogan from './components/Slogan';
import RandomSentence from './components/RandomSentence';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactersContainer />
        <Slogan />
        <RandomSentence displaySentence = {false}/>
      </div>
    );
  }
}

export default App;
