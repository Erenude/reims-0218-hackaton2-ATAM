import React, { Component } from 'react'
import './App.css'
import CharactersContainer from './components/CharactersContainer'
import Slogan from './components/Slogan'
import Carousel from './components/Carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
				<Slogan />
        <CharactersContainer />
      </div>
    );
  }
}

export default App
