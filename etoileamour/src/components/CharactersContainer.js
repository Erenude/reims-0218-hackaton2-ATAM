import React, { Component } from 'react'
import { Container, Button } from 'reactstrap';
import ListCharacters from './ListCharacters'
import TestHidden from './TestHidden'
import Carousel from './Carousel'
import RandomSentence from './RandomSentence'

class CharactersContainer extends Component {

    constructor() {
        super()
        this.state = {
            beforeClickButton: true,
            colLeft: [],
            colRight: [],
            persoLeft: [],
            persoRight: []
        }
        this.randomCharacters = this.randomCharacters.bind(this)
    }

    randomCharacters() {
      console.log("on clique sur le bouton")
      const leftColumn = Math.round(Math.random() * this.state.colLeft.length)
      const rightColumn = Math.round(Math.random() * this.state.colRight.length + this.state.colRight.length)
      console.log(leftColumn)
      console.log(rightColumn)
      console.log(this.state.colLeft.forEach((user) => {
        if (user.id === leftColumn) {
          this.setState({
            persoLeft: user,
            beforeClickButton: false
          })
        }
      }))
      console.log(this.state.colRight.forEach((user) => {
        if (user.id === rightColumn) {
          this.setState({
            persoRight: user
          })
        }
      }))
    }

    render() {
      if (this.state.beforeClickButton) {
        return <div>
          <Carousel />
          <TestHidden />
          <Button onClick={this.randomCharacters}> Coucou</Button></div>
      }
        return <Container>
          <ListCharacters characters={this.state.persoLeft}/>
           <ListCharacters characters={this.state.persoRight}/>
          <Button onClick={this.randomCharacters}> Coucou</Button>
          <RandomSentence displaySentence = {true}/>
      </Container>
    }

    componentDidMount() {
        console.log('characters did mount')
        const url = 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json'
        fetch(url)
        .then(res => res.json())
        .then(characters => {
            const colLeft = characters.filter(character => character.id <= 44)
            const colRight = characters.filter(character => character.id > 44)
            this.setState({
              colLeft,
              colRight
            })
        })
    }
}

export default CharactersContainer
