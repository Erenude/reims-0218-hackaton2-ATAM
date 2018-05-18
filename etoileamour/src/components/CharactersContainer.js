import React, { Component } from 'react'
import { Container, Button, Row, Col } from 'reactstrap';
import ListCharacters from './ListCharacters'
import TestHidden from './TestHidden'
import RandomSentence from './RandomSentence'

class CharactersContainer extends Component {

    constructor() {
        super()
        this.state = {
            beforeClickButton: true,
            colLeft: [],
            colRight: [],
            persoLeft: [],
            persoRight: [],
            characters: []
        }
        this.randomCharacters = this.randomCharacters.bind(this)
        this.vitesseFois100 = this.vitesseFois100.bind(this)
        this.boutonStopImage = this.boutonStopImage.bind(this)
        this.speed = 3000
    }

    randomCharacters() {
      const leftColumn = Math.round(Math.random() * this.state.colLeft.length)
      const rightColumn = Math.round(Math.random() * this.state.colRight.length + this.state.colRight.length)
      this.state.colLeft.forEach((user) => {
        if (user.id === leftColumn) {
          this.setState({
            persoLeft: user,
            beforeClickButton: false
          })
        }
      })
      this.state.colRight.forEach((user) => {
        if (user.id === rightColumn) {
          this.setState({
            persoRight: user
          })
        }
      })
    }

vitesseFois100() {
  clearInterval(this.eventRandomImage)
  this.eventRandomImage = setInterval(this.randomCharacters, 500)
}

boutonStopImage() {
  clearInterval(this.eventRandomImage)
}


    render() {
      if (this.state.beforeClickButton) {
        return <div>
          <TestHidden />
          <Button onClick={this.randomCharacters}> Coucou </Button></div>
      }
        return <Container>
          <Row className="justify-content-center">
            <Col xs="5" className="m-1">
          <ListCharacters characters={this.state.persoLeft}/>
        </Col>
        <Col xs="5" className="m-1">
           <ListCharacters characters={this.state.persoRight}/>
         </Col>
            <div className="mx-auto">
              <Button onClick={this.vitesseFois100} color="success" className="m-2"> Faites donc copuler ces énergumènes </Button>
              <Button onClick={this.boutonStopImage} color="danger" className="m-2"> Arrêter la copulation immédiatement </Button>
              <RandomSentence displaySentence = {true}/>
            </div>
          </Row>
      </Container>
    }

    componentDidMount() {
        const url = 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json'
        fetch(url)
        .then(res => res.json())
        .then(characters => {
            const colLeft = characters.filter(character => character.id <= 44)
            const colRight = characters.filter(character => character.id > 44)
            this.setState({
              colLeft,
              colRight,
              characters
            })
        })
    }
}

export default CharactersContainer
