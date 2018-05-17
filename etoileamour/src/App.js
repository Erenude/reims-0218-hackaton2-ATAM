import React, { Component } from 'react';
import './App.css';
import CharactersContainer from './components/CharactersContainer'
import Slogan from './components/Slogan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactersContainer />
        <Slogan />
      </div>
    );
  }
}

export default App;
