import React, { Component } from 'react'
import { Container, Button } from 'reactstrap';
import ListCharacters from './ListCharacters'

class CharactersContainer extends Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            colLeft: [],
            colRight: [],
            characters: {
                name: ''
            }
        }
    }
    render() {
        return <Container>
          <ListCharacters characters={this.state.colLeft}/>
           <ListCharacters characters={this.state.colRight}/>
          <Button />
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
