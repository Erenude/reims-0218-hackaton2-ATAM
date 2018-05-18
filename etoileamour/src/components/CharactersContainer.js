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
            characters: [],
            buttonStopAndMatch: false,
            buttonPageReset: false
        }
        this.randomCharacters = this.randomCharacters.bind(this)
        this.vitesseFois100 = this.vitesseFois100.bind(this)
        this.boutonStopImage = this.boutonStopImage.bind(this)
        this.buttonPageReset = this.buttonPageReset.bind(this)
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
  this.eventRandomImage = setInterval(this.randomCharacters, 1500)
}

boutonStopImage() {
  clearInterval(this.eventRandomImage)
  this.setState({
    buttonStopAndMatch: true
  })
}

buttonPageReset() {
  this.setState({
    beforeClickButton: true
  })
}

refreshPage(){ window.parent.location = window.parent.location.href; }

    render() {
      if (this.state.beforeClickButton) {
        return <div>
          <TestHidden />
          <Button onClick={this.randomCharacters}> Commencer la reproduction </Button></div>
      }

      if (this.state.buttonStopAndMatch === true) {
        return <Container>
            <h1> {this.state.persoLeft.name} & {this.state.persoRight.name} </h1>
            <Row className="justify-content-center">
              <Col xs="4" className="m-1">
            <ListCharacters characters={this.state.persoLeft}/>
          </Col>
            <Col xs="3" className="m-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/CG_Heart.gif" className="img-fluid" alt="heart"/>
            </Col>
            <Col xs="4" className="m-1">
            <ListCharacters characters={this.state.persoRight}/>
          </Col>
        </Row>
            <RandomSentence displaySentence = {true}/>
            <Button onClick={this.refreshPage}> Quitte cette page </Button>
             <Button onClick={this.boutonStopImage} color="danger" className="m-2"> La petite phrase sympatoche </Button>
          </Container>
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
